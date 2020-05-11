const axios = require('axios');
require('dotenv').config();

module.exports = axios.get((`${process.env.HOST}/landings`))
  .then(function (response) {
    
    return response.data[0];
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
});


