const conn = require('./conn');
const Country = require('./Country')

const sync = () => {
  return conn.sync({force: true})
}

const seed = () => {
  Promise.all([
    Country.create({ name: 'USA', event: 'Snowboard Slopestyle', medal: 'Gold' }),
    Country.create({ name: 'Germany', event: 'Luge', medal: 'Bronze'}),
    Country.create({ name: 'Netherlands', event: 'Speed Skating (5,000)', medal: 'Gold'})
  ])
}

module.exports = {
  sync,
  seed,
  models: {
    Country
  }
}
