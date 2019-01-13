var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Can you say hello?', 'Say hello to test the Hello Intent.');
  },
  'HelloIntent': function() {
    var audioFile = '<audio src="https://s3.amazonaws.com/cdn.dabblelab.com/audio/one-small-step-for-man.mp3" />';
    this.emit(':ask', `Hello. ${audioFile}`, 'How was that?');
  },
  'Unhandled': function (){
    this.emit(':tell', 'Sorry, I dont understand.');
  }
};