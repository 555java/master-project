const express = require("express");
const router = express.Router();

const Post = require("../models/postModel");

router.post("/posts/new", async function (req, res, next) {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    authorId: req.body.authorId,
  });

  try {
    await newPost.save();

    res.status(200).send({ newPost });
  } catch (err) {
    next({
      status: 400,
      message: err?.message || "Something went wrong with uploading post",
    });
  }
});

module.exports = router;
