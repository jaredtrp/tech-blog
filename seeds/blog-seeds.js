const { Blog } = require('../models');

const blogdata = [
  {
    title: 'How many spiderman movies are there?',
    blog_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 2,
  },
  {
    title: 'I swear Loki is NOT that hot.',
    blog_text: 'Est ullamcorper eget nulla facilisi etiam dignissim.',
    user_id: 2,
  },
  {
    title: 'Team Cap, all the way!',
    blog_text:
      'Nisl nisi scelerisque eu ultrices vitae auctor. Sed tempus urna et pharetra pharetra massa.',
    user_id: 1,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
