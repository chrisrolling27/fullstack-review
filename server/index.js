const express = require('express');
let app = express();

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // return the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.username)

  res.status(201).send('repo info for user you requested')


});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  res.status(200).send('hello christopher');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

