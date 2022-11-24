// importing modules
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
var LocalStrategy = require("passport-local");
const passport = require("passport");
// importing User Schema
const User = require("../models/userModel");

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
        console.log(err);
        return next(err);
      }
      return res.send({ success: true });
    });
  });
});

module.exports = router;
