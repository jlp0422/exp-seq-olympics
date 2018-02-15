const conn = require('./conn');
const { Sequelize } = conn;

const OlympicEvent = conn.define('events', {
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
    get: function() {
      if (this.getDataValue('gender') === 'M') return `Men's`
      if (this.getDataValue('gender') === 'F') return `Women's`
    }
  },
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

module.exports = OlympicEvent
