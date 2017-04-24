/**
 * RequestService
 */

// Imports
let request = require('request-promise-native');

class RequestService {
  constructor(url) {
    this.url = url;
    this.timeout = 600000;
  }

  sendGET(endpoint) {
    let params = {
      method: 'GET',
      uri: `${this.url}/${endpoint}`,
      timeout: this.timeout
    };

    return request(params).then(
      (response) => {
        return this.parseResponse(response);
      },

      (error) => {
        return this.parseResponse(error.response.body);
      });
  }

  parseResponse(response) {
    let json = JSON.parse(response);

    if(!json.success) {
      throw json.content.message || json.content;
    }

    return json.content;
  }


  getHomepage() {
    return this.sendGET('/').then(response => {
      return response.message;
    });
  }
}

module.exports = RequestService;