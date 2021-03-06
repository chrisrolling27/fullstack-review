const express = require('express');
let app = express();
const gitHelper = require('../helpers/github.js')
const db = require('../database/index.js');


app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {

  // This route should take the github username provided
  // return the repo information from the github API, then
  // save the repo information in the database

  //console.log(req.body.username)
  //gitHelper(req.body.username, (data) => {data.map((repo) => {save(repo)})});
  //gitHelper(req.body.username, (response) => {res.status(201).send(response)});

  gitHelper(req.body.username, (data) => {
    data.map((repo) => {db.save(repo)})
    res.status(201).send('success')
  });



});


app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
console.log('app.get run');

db.Repo.aggregate([{$sort: {forks: -1}}, {$limit: 25}]).then((response) => res.status(200).send(response));

});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

