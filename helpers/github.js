const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'get',
    headers: {
      'User-Agent': 'chrisrolling27',
      'Authorization': `token ${config.token}`
    }
  };

  axios(options).then(console.log(response));

}


module.exports.getReposByUsername = getReposByUsername;