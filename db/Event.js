const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Event = conn.define('events', {
  name: {
    type: Sequelize.STRING
  },
  goldWinner: {
    type: Sequelize.STRING
  },
  goldCountry: {
    type: Sequelize.STRING
  },
  silverWinner: {
    type: Sequelize.STRING
  },
  silverCountry: {
    type: Sequelize.STRING
  },
  bronzeWinner: {
    type: Sequelize.STRING
  },
  bronzeCountry: {
    type: Sequelize.STRING
  },
})

module.exports = Event
