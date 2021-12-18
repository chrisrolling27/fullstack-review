const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true });


let repoSchema = mongoose.Schema({
  id: Number,
  name: String,

  owner: {
    login: String,
    id: Number

  },
  url: String,
  description: String,
  forks: Number

});

const Repo = mongoose.model('Repos2', repoSchema);

const save = (repo) => {
// This function should save a repo or repos to the MongoDB

repo = new Repo({id: repo.id, name: repo.name, owner: repo.owner, url: repo.url, description: repo.description, forks: repo.forks})

repo.save();

}

module.exports = {
  save,
  Repo
}