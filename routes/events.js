/* eslint-disable */

const app = require('express').Router()
const db = require('../db');
const { Event } = db.models
module.exports = app

app.get('/', (req, res, next) => {
  Event.findAll()
    .then(events => res.render('events', { title: 'Events', events }))
    .catch(next)
})

app.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => res.render('event', {title: `${event.name}`, event}))
    .catch(next)
})

app.get('/:id/edit', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => res.render('edit', {title: `${event.name}`, event}))
    .catch(next)
})

app.post('/', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.redirect(`/events`))
    .catch(next)
})

app.delete('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => event.destroy())
    .then(() => res.redirect('/events'))
    .catch(next)
})

app.patch('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => {
      Object.assign(event, req.body)
      return event.save()
    })
    .then(event => res.redirect(`/events/${event.id}`))
    .catch(next)
})
