const express = require('express');
let app = express();
const gitHelper = require('../helpers/github.js')
const save = require('../database/index.js');

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {

  // This route should take the github username provided
  // return the repo information from the github API, then
  // save the repo information in the database

  //gitHelper('chrisrolling27', (data) => {console.log(data[3].id)});

  //console.log(req.body.username)
  //gitHelper(req.body.username, (data) => {data.map((repo) => {save(repo)})});
  //gitHelper(req.body.username, (response) => {res.status(201).send(response)});

  gitHelper(req.body.username, (data) => {data.map((repo) => {save(repo)})});


  res.status(201).send('success!!!')

});



app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  res.status(200).send('hello christopher');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

