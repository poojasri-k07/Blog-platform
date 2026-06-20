const Comment = require("../models/Comment");

// Add Comment
const addComment = async (req, res) => {
  try {
    const { postId, userName, text } = req.body;

    const comment = await Comment.create({
      postId,
      userName,
      text,
    });

    res.status(201).json({
      message: "Comment added successfully",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Comments for a Post
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      postId: req.params.postId,
    }).sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addComment,
  getComments,
};