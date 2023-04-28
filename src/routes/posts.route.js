const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model");

router.get("/", (_, res) => {
  res.send("We are on posts");
});

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
