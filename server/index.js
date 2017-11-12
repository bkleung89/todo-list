const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/db.js');
var session = require('express-session');
var path = require('path');

app.use(express.static(path.join(__dirname, '../public'))); // not sure if this is right?

app.get('/', bodyParser(), (req, res) => {
  // var TodoList = db.model;
  // TodoList
  //   .find({
  //     author: req.body.user
  //   })
  //   .limit(10)
  //   .exec(function(results) {
  //   });
  res.send('Hello World!');
}); // get things from database and send back to client

app.get('/user', bodyParser(), (req, res) => {
  console.log('this is the req obj', req);
  console.log('this is the req body', req.body);
  var TodoList = db.model;
  TodoList
    .find({'author': req.query.user})
    // .findOne({})
    .limit(10)
    .exec(function(err, results) {
      // var entries = '';
      // for (var i = 0; i < results.length; i++) {
      //   entries += results[i].date + '\n' + results[i].body + '\n';
      // }
      res.send(JSON.stringify(results));
    });
});

app.post('/', bodyParser(), (req, res) => {
  var entry = new db.model({ author: req.body.user, body: req.body.body });
  entry.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('saved entry');
      res.send('got a POST request');
    }
  });
}); // send to things to database and send back confirmation to client

app.listen(3000, () => console.log('Example app listening on port 3000!')); // from Express site
