/**
 * GameServer
 */

// Imports
let RequestService = require('./request-service');

class GameServer {
  constructor(url) {
    this.url = url;
    this.RS = new RequestService(url);
  }

  start() {
    console.log("Starting server!");
    return this.RS.getHomepage().then(response => {
      console.log(response);
    });
  }
}

module.exports = GameServer;