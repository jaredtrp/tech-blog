const User = require('./user');
const Blog = require('./blog');
const Comment = require('./Comment');

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment);

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };