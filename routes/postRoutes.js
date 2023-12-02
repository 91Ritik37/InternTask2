const express = require('express');
const router = express.Router();

const { create_post, update_post, delete_Post, readById, likeOnPost, commentOnPost } = require('../controllers/postController');

router.post("/create_post", create_post);
router.put('/update_post/:id', update_post);
router.delete('/delete_post/:id', delete_Post)

router.get("/posts/:id", readById);

router.put("/:id/likes", likeOnPost);

router.put("/:id/comment", commentOnPost);

module.exports = router;