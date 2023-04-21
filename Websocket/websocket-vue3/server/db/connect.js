const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'host',
  dialect: 'mysql',
});

module.exports =  sequelize;