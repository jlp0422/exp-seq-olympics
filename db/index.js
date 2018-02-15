const conn = require('./conn');
const OlympicEvent = require('./Event')

const sync = () => {
  return conn.sync({force: true})
}

const seed = () => {
  Promise.all([
    OlympicEvent.create({
      gender: 'M',
      name: 'Snowboard Slopestyle',
      goldWinner: 'Red Gerard',
      goldCountry: 'USA',
      silverWinner: 'Max Parrot',
      silverCountry: 'Canada',
      bronzeWinner: 'Mark McMorris',
      bronzeCountry: 'Canada'
    }),
    OlympicEvent.create({
      gender: 'M',
      name: 'Ski Jumping',
      goldWinner: 'Andreas Wellinger',
      goldCountry: 'Germany',
      silverWinner: 'Johann Andre Forfang',
      silverCountry: 'Norway',
      bronzeWinner: 'Robert Johansson',
      bronzeCountry: 'Norway'
    }),
    OlympicEvent.create({
      gender: 'M',
      name: 'Luge',
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
    OlympicEvent
  }
}
