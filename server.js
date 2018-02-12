/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Event } = db.models;
const nunjucks = require('nunjucks')
nunjucks.configure({ noCache: true })

app.set('view engine', 'html')
app.engine('html', nunjucks.render)

app.use(require('body-parser').urlencoded());
app.use(require('method-override')('_method'));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use((req, res, next) => {
  res.locals.path = req.url;
  next()
})

app.use('/events', require('./routes/events'))

app.get('/', (req, res, next) => {
  Event.findAll()
    .then(() => res.render('index', { title: 'Home' }))
    .catch(next)
})

// app.use((err, req, res, next) => {
//   res.sendStatus(404)
//   next()
// })


const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`))

db.sync()
  .then(() => db.seed())
