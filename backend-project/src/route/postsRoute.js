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

router.post(
  "/posts/new",
  upload.array("images", 5),
  async function (req, res, next) {
    const imageNames = req.files.map((file) => {
      return { filename: file.filename };
    });

    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      authorId: req.body.authorId,
      image: imageNames,
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
  }
);

module.exports = router;
