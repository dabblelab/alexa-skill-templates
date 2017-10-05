var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Hello, what is your name?', 'Will you tell me your name?');
  },
  'HelloIntent': function() {
    this.emit(':tell', 'Hello, nice to meet you.');
  },
  'HelloName' : function(){
    var userName = this.event.request.intent.slots.name.value;

    if (userName !== undefined) {
      this.emit(':tell', `Nice to meet you ${userName}`);
    } else {
      this.emit(':tell', 'Hello! Nice to meet you.');
    }
  },
  'Unhandled': function (){
    this.emit(':tell', 'Sorry, I dont understand.');
  }
};
