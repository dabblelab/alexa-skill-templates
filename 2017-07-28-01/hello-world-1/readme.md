# A simple custom Alexa skill

## Hello World from Alexa

```javascript
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Hello World! This is a simple custom skill.', 'I am not able to do anything yet.');
  }

};
```