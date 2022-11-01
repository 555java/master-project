const express = require("express");
const app = express();
const User = require("./src/models/userModel");

const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userRoute = require("./src/route/userRoute");

mongoose.connect("mongodb://localhost:27017/backend-project");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Data base connexted");
});

app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Shh, its a secret!",
    resave: true,
    saveUninitialized: true,
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));
app.use("/", userRoute);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
