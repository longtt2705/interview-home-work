const express = require("express");
const {
  getPostById,
  getAllPosts,
  searchPostsByTitle,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getAllPosts);
router.get("/search/", searchPostsByTitle);
router.get("/:id", getPostById);

module.exports = router;
