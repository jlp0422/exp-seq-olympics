/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Country } = db.models;
const nunjucks = require('nunjucks')
nunjucks.configure({ noCache: true })

app.use(require('body-parser').urlencoded());
app.use(require('method-override')('_method'));
app.use((req, res, next) => {
  res.locals.path = req.url;
  next()
})

app.get('/', (req, res, next) => {
  Country.findAll()
    .then(countries => res.send(countries))
    .catch(next)
})










const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`))

db.sync()
  .then(() => db.seed())
