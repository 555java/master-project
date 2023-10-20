// importing modules
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
var LocalStrategy = require("passport-local");
const passport = require("passport");
// importing User Schema
const User = require("../models/userModel");
const Post = require("../models/postModel");
const mongoose = require("mongoose");

router.post("/register", function (req, res, next) {
  User.register(
    new User({ email: req.body.email, username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        return next({
          status: 400,
          message: "Your account could not be saved. Error: " + err.message,
        });
      } else {
        req.login(user, (err) => {
          if (err) {
            return next({
              status: 400,
              message:
                err?.message || "Something went wrong with registering user",
            });
          } else {
            res.json({
              success: true,
              message: "Your account has been saved",
              data: { user: user.toJSON() },
            });
          }
        });
      }
    }
  );
});

router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (hashingErr, user, passwordErr) {
    const err = hashingErr || passwordErr;

    if (err) {
      return next({
        status: 400,
        message: err?.message || "Something went wrong during authentification",
      });
    }

    if (!user) {
      return next({ status: 400, message: "No users found" });
    }

    req.login(user, (err) => {
      if (err) {
        return next({
          status: 400,
          message: err?.message || "Something went wrong with registering user",
        });
      } else {
        res.json({
          success: true,
          message: "Authentication successful",
          data: { user: user.toJSON() },
        });
      }
    });
  })(req, res);
});

router.get("/user", function (req, res, next) {
  return res.json({ user: req.user || null });
});

router.post("/logout", function (req, res, next) {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      return res.send({ success: true });
    });
  });
});

router.post("/posts/user/:userId/subscribe", async function (req, res, next) {
  try {
    const user = await User.findById(req.body.authUserId);
    user.subscriptions.push(mongoose.Types.ObjectId(req.params.userId));
    await user.save();
    res.status(200).send({ user });
  } catch (err) {
    next({
      status: 400,
      message: err?.message || "Something went wrong with subscriptions",
    });
  }
});

router.post("/posts/user/:userId/unsubscribe", async function (req, res, next) {
  try {
    const user = await User.findById(req.body.authUserId);
    const unsubscribeId = mongoose.Types.ObjectId(req.params.userId);
    const index = user.subscriptions.indexOf(unsubscribeId);
    if (index < 0) {
      throw new Error({
        status: 400,
        message: err?.message || "No user with such id",
      });
    }
    user.subscriptions.splice(index, 1);
    await user.save();
    res.status(200).send({ user });
  } catch (err) {
    next({
      status: 400,
      message: err?.message || "Something went wrong with subscriptions",
    });
  }
});

router.get("/user/:userId/subscriptions", async function (req, res, next) {
  try {
    let user = await User.findById(req.params.userId);
    if (!user) {
      throw new Error("Sorry, something went wrong loading user posts");
    }
    await user.populate("subscriptions", "username");
    return res.send({ success: true, user });
  } catch (err) {
    next({
      status: 400,
      message:
        err?.message || "Something went wrong with loading subscriptions",
    });
  }
});

router.get("/explore", async function (req, res, next) {
  try {
    let users = User.find({}, "username", function (err, data) {
      res.json(data);
    });
  } catch (err) {
    next({
      status: 400,
      message: err?.message || "Something went wrong with loading users",
    });
  }
});

module.exports = router;
