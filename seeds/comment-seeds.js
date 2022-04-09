const { Comment } = require('../models');

const commentdata = [
  {
    comment_text:
      'Tellus elementum sagittis vitae et leo duis. Id donec ultrices tincidunt arcu non.',
    user_id: 1,
    blog_id: 1,
  },
  {
    comment_text: ' Sodales ut etiam sit amet.',
    user_id: 2,
    blog_id: 2,
  },
  {
    comment_text:
      'Adipiscing tristique risus nec feugiat in fermentum posuere urna.',
    user_id: 3,
    blog_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
