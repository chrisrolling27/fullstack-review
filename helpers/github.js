const axios = require('axios');
const config = require('../config.js');



let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'chrisrolling27',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options).catch((err) => console.log('ERROR HERE: ', err)).then((response) => callback(response.data));


}


module.exports = getReposByUsername;