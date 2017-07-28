var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.dynamoDBTableName = 'HelloWorld';
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome! You introduce yourself by saying: My name is, and then your name.', 'Please introduce yourself by saying: My name is, and then your name.');
  },

  'NewSession': function () {
    // check for session data
    var userName = this.attributes['userName'];
    if (userName) {
      // greet the user by name
      this.emit(':ask', `Welcome back ${userName}!`,  `To change you name say: My name is, and then your name.`);
    } else {
      // first time user
      this.emit(':ask', 'Hello and welcome! Please introduce yourself by saying: My name is, and then your name.', 'You can introduce yourself by saying: My name is, and then your name.');
    }
  },

  'RememberName': function () {

  var nameSlot = this.event.request.intent.slots.name.value;

  var name;
  if (nameSlot) {
    name = nameSlot;
  }

  if (name) {
    this.attributes['userName'] = name;
    this.emit(':tell', `Nice to meet you ${name}! I'll greet you by name the next time we talk`);
  } else {
    this.emit(':ask', `Sorry, I didn\'t recognise that name!`, `'Tell me your name by saying: My name is, and then your name.'`);
  }
}

};
