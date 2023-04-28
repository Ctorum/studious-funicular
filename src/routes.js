const express = require("express");
const router = express.Router();

//route declare
const posts = require("./routes/posts.route");

//route middleware
router.use("/posts", posts);

module.exports = router;
