const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({

    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            blog_id: req.body.blog_id,
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

module.exports = router;