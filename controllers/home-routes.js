const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
    Blog.findAll({
      attributes: [
        'id',
        'blog_text',
        'title',
        'createdAt'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'Blog_id', 'user_id', 'createdAt'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbBlogData => {
        // pass a single Blog object into the homepage template
        const Blogs = dbBlogData.map(Blog => Blog.get({ plain: true }));
        
        res.render('homepage', { 
          Blogs,
          loggedIn: req.session.loggedIn
       });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/Blog/:id', (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'Blog_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbBlogData => {
    if (!dbBlogData) {
      res.status(404).json({ message: 'No Blog found with this id' });
      return;
    }

    // serialize the data
    const Blog = dbBlogData.get({ plain: true });
    console.log(Blog);

    // pass data to template
    res.render('single-blog', {
      Blog,
      loggedIn: req.session.loggedIn
   });

  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// router.get('/', (req, res) => {
//     res.render('homepage', {
//         id: 1,
//         Blog_url: 'https:// handlebarsjs.com/guide/',
//         title: 'Handlebars Docs',
//         createdAt: new Date(),
//         vote_count: 10,
//         comments: [{}, {}],
//         user: {
//             username: 'test_user'
//         }
//     });
// });

module.exports = router;