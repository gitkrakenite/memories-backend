const PostMessage = require("../models/postMessage");

// DESC       get posts
// METHOD     GET /api/v1/posts
// Access     Public
const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); //fetch all posts in the database
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// DESC       create post
// METHOD     POST /api/v1/posts
// Access     Private
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// DESC       update post
// METHOD     PATCH /api/v1/posts/:id
// Access     Private
const updatePost = async (req, res) => {
  res.json({ message: "Update post" });
};

// DESC       delete post
// METHOD     DELETE /api/v1/posts/:id
// Access     Private
const deletePost = async (req, res) => {
  res.json({ message: "Delete post" });
};

module.exports = { getPosts, createPost, updatePost, deletePost };
