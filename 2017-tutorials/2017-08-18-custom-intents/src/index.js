var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Hello, can you say: hello?', 'Can you say hello?');
  },
  'HelloIntent': function (){
    this.emit(':tell', 'Hello, nice to meet you.');
  },
  'PeopleInSpace': function (){
    this.emit(':tell', 'Sorry, I dont know how many people are in space.');
  },
  'Unhandled': function (){
    this.emit(':tell', 'Sorry, I dont understand.');
  }
};
