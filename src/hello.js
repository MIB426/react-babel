// Hello.js CommonJS

var config = require('./config.json');

module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.Message;
    return greet;
};