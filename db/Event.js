const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Event = conn.define('events', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  goldWinner: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  goldCountry: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  silverWinner: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  silverCountry: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  bronzeWinner: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  bronzeCountry: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
})

module.exports = Event
