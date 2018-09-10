var request = require('request');

function main(params) {
  
    var _url = "$api_connect_url";

    var options = {
      url: _url,
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({selector: {"_id": {"$gt": 0}}, fields: ["_id", "name", "rating", "body"]})
    };
    
    return new Promise(function(resolve, reject) {
      request(options, function(error, response, body) {
        if (error) {
          reject(error);
        }
        else {
          resolve({msg: response});
        }
      });
    });
}
