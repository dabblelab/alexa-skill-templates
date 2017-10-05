# Adding Intents

After [creating a simple hello world skill](../01-hello-world), you'll want to start making skills that are a bit smarter. To do that, you'll need to write code that provides additional functionality for understanding and responding to a user's 'intent'.

This demos shows how to add simple intents to a custom skill. The code in this demo builds on the code from the [01-hello-world](/01-hello-world) demo. To do this demo, complete the following steps:

## Resources

https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface

1. Login to the [Developer Console](http://developer.amazon.com/alexa)
2. Add an intent named 'HelloIntent' to the hello world skill
3. Add sample utterances for the HelloIntent
4. Add handler code for the HelloIntent
5. Deploy Lambda
6. Test the HelloIntent

### index.js
```javascript
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Hello, can you say: hi?', 'Say hello to test the Hello Intent.');
  },
  'HelloIntent': function() {
    this.emit(':tell', 'Hello! Nice to meet you.');
  },
  'Unhandled': function (){
    this.emit(':tell', 'Sorry, I don\'t understand.');
  }
};
```
### Intent Schema
```javascript
{
  "intents": [
    {
      "intent": "HelloIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}
```
### Sample Utterances
```text
HelloIntent say hello
HelloIntent hi
HelloIntent hello
```
