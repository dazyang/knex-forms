var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/new', (req, res) => { 
  res.render('add_user')
})

router.post('/users/new', (req, res) => {
  
  res.redirect('/')
})

router.get('/users/:id', (req, res) => {

  db.getUser(req.params.id, req.app.get('connection'))
    //the user below is a parameter that gets passed through .then, it can be any given name
    .then(user => {
      res.render('user_profile', user)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})





module.exports = router
