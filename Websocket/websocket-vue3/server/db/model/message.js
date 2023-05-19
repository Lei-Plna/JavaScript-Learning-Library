const sequelize = require('./connect');

const Message = sequelize.define('message', {

}, {
  freezeTableName: false,
  timestamp: true,
  createdAt: 'created_time'
});