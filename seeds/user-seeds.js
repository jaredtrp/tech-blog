const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'manwithaplan',
    email: 'manwithaplan@gmail.com',
    password: '1234',
  },
  {
    username: 'bostiedad',
    email: 'bostiedad@gmail.com',
    password: '1234',
  },
  {
    username: 'geekfreak',
    email: 'geekfreak@gmail.com',
    password: '1234',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
