var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'To hear your phone number, say: tell me my phone number', 'I\'ll tell you your phone number if you say: tell me my phone number.');
  },
  'CapturePhoneNumber': function() {
    //var phoneNumber = "8135750530";
    var phoneNumber = '<say-as interpret-as="telephone">8135750530</say-as>';
    this.emit(':tell', `Your phone number is ${phoneNumber}.`);
  },
  'Unhandled': function (){
    this.emit(':tell', 'Sorry, I dont understand.');
  }
};