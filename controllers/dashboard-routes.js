const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('=======================');
  Post.findAll({
    where: {
      //use ID from the session
      user_id: req.session.user_id,
    },
    attributes: ['id', 'title', 'contents', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });
});
