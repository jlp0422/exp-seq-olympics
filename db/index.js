const conn = require('./conn');
const Event = require('./Event')

const sync = () => {
  return conn.sync({force: true})
}

const seed = () => {
  Promise.all([
    Event.create({
      name: 'Men\'s Snowboard Slopestyle',
      goldWinner: 'Red Gerard',
      goldCountry: 'USA',
      silverWinner: 'Max Parrot',
      silverCountry: 'Canada',
      bronzeWinner: 'Mark McMorris',
      bronzeCountry: 'Canada'
    }),
    Event.create({
      name: 'Men\'s Ski Jumping',
      goldWinner: 'Andreas Wellinger',
      goldCountry: 'Germany',
      silverWinner: 'Johann Andre Forfang',
      silverCountry: 'Norway',
      bronzeWinner: 'Robert Johansson',
      bronzeCountry: 'Norway'
    }),
    Event.create({
      name: 'Men\'s Luge',
      goldWinner: 'David Gleirscher',
      goldCountry: 'Austria',
      silverWinner: 'Chris Mazdzer',
      silverCountry: 'USA',
      bronzeWinner: 'Johannes Ludwig',
      bronzeCountry: 'Germany'
    }),
  ])
}

module.exports = {
  sync,
  seed,
  models: {
    Event
  }
}
