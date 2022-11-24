const express = require("express");
const app = express();
const User = require("./src/models/userModel");

const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userRoute = require("./src/route/userRoute");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/backend-project");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Data base connexted");
});

app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/backend-project",
      ttl: 14 * 24 * 60 * 60,
    }),
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));
app.use("/", userRoute);

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.use((err, req, res, next) => {
  const status = err?.status || 500;
  const message = err?.message || "Server error";

  res.status(status).json({ isSuccess: false, message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
