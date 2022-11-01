// importing modules
const express = require("express");
const router = express.Router();
var LocalStrategy = require("passport-local");
const passport = require("passport");
// importing User Schema
const User = require("../models/userModel");

router.post("/register", function (req, res) {
  User.register(
    new User({ email: req.body.email, username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: "Your account could not be saved. Error: " + err,
        });
      } else {
        req.login(user, (er) => {
          if (er) {
            res.json({ success: false, message: er });
          } else {
            res.json({ success: true, message: "Your account has been saved" });
          }
        });
      }
    }
  );
});

router.post("/login", function (req, res) {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else if (!req.body.password) {
    res.json({ success: false, message: "Password was not given" });
  } else {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          const token = jwt.sign(
            { userId: user._id, username: user.username },
            secretkey,
            { expiresIn: "24h" }
          );
          res.json({
            success: true,
            message: "Authentication successful",
            token: token,
          });
        }
      }
    })(req, res);
  }
});

module.exports = router;

// const strategy = new LocalStrategy(function verify(username, password, cb) {
//   db.get(
//     "SELECT * FROM users WHERE username = ?",
//     [username],
//     function (err, user) {
//       if (err) {
//         return cb(err);
//       }
//       if (!user) {
//         return cb(null, false, { message: "Incorrect username or password." });
//       }

//       crypto.pbkdf2(
//         password,
//         user.salt,
//         310000,
//         32,
//         "sha256",
//         function (err, hashedPassword) {
//           if (err) {
//             return cb(err);
//           }
//           if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
//             return cb(null, false, {
//               message: "Incorrect username or password.",
//             });
//           }
//           return cb(null, user);
//         }
//       );
//     }
//   );
// });
