var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  //alexa.dynamoDBTableName = 'HelloWorld';
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome! To add a greeting say: Add a greeting.', 'Say: Add a greeting to add a new greeting.');
  },

  'GreetingAdd': function () {

  var nameSlot = this.event.request.intent.slots.name.value;
  var greetingSlot = this.event.request.intent.slots.personalGreeting.value;

  var name;
  if (nameSlot) {
    name = nameSlot;
    //greeting = greetingSlot;
  }

  if (name) {
    //this.attributes['userName'] = name;
    this.emit(':tell', `Nice to meet you ${name}! ${greetingSlot}`);
  } else {
    this.emit(':ask', `Sorry, I didn\'t recognise that name!`, `'Say: Add a greeting to add a new greeting.'`);
  }
}

};
