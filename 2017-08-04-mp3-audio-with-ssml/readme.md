# Using SSML Audio

Speech Synthesis Markup Language (SSML) provides you will more control over how Alexa generates the speech for a skill response. You might use SSML if you wanted Alexa to read a string of digits back as a standard telephone number for example. Speech Synthesis Markup Language (SSML) would let you do that - and much more.

SSML is an open standard for marking up text to generate synthetic speech. The Alexa Skills Kit supports a subset of the tags defined in the [SSML specification](https://www.w3.org/TR/speech-synthesis/). The [SSML tags supported by the Alexa Skills Kit are listed here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#ssml-supported).


NOTE: For your audio files to work with Alexa, make sure they are encoded correctly. See [Converting Audio Files to an Alexa-Friendly Format](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#h3_converting_mp3) for details.

```javascript
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
```

