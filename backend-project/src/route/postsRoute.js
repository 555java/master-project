const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static/image-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e4);
    const ext = file.mimetype.split("/")[1];
    cb(null, uniqueSuffix + "." + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: async (req, file, cb) => {
    const isImageMimetype =
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg";
    if (!isImageMimetype) {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
    cb(null, true);
  },
});

const Post = require("../models/postModel");
const User = require("../models/userModel");

router.post(
  "/posts/new",
  upload.array("images", 5),
  async function (req, res, next) {
    console.log(req.body);
    const imageNames = req.files.map((file) => {
      return { filename: file.filename };
    });

    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      authorId: req.body.authorId,
      authorUsername: req.body.authorUsername,
      image: imageNames,
    });

    try {
      await newPost.save();
      const user = await User.findById(req.body.authorId);
      user.posts.push(newPost._id);
      await user.save();
      res.status(200).send({ newPost });
    } catch (err) {
      next({
        status: 400,
        message: err?.message || "Something went wrong with uploading post",
      });
    }
  }
);

router.get("/posts/:postId", async function (req, res, next) {
  try {
    const post = await Post.findById(req.params.postId);
    if (post) {
      return res.send({ success: true, post: post });
    } else {
      throw new Error("Failed to find the post");
    }
  } catch (err) {
    next({
      status: 400,
      message: err?.message || "Failed to find the post",
    });
  }
});

router.get("/posts/user/:userId", async function (req, res, next) {
  try {
    let user = await User.findById(req.params.userId);
    if (!user) {
      throw new Error("Sorry, something went wrong loading user posts");
    }
    await user.populate("posts");
    return res.send({ success: true, user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
