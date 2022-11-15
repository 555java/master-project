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
        req.login(user, (er) => {
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

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      "po324kjhdsfsd0983",
      { expiresIn: "24h" }
    );
    res.json({
      success: true,
      message: "Authentication successful",
      data: { user: user.toJSON() },
      token: token,
    });
  })(req, res);
});

module.exports = router;
