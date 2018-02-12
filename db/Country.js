const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Country = conn.define('countries', {
  name: {
    type: Sequelize.STRING
  },
  event: {
    type: Sequelize.STRING,
  },
  medal: {
    type: Sequelize.ENUM('Bronze', 'Silver', 'Gold')
  }
})

module.exports = Country
