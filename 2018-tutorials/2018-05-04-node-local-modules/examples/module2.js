const greetings = require("./greetings.json");
const farewells = ["good bye","catch you on the flip side", "later gator", "until next time"];

const helpers = {};

helpers.randomGreeting = function() {
    return `${greetings.randomElement()}`;
}

helpers.randomFarewell = function() {
    return `${farewells.randomElement()}`;
}

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

module.exports = helpers;