# Locally testing Lambda functions used for Alexa skills

Using AWS Lambda is a great way to host skill services for Amazon Alexa. But, when you're getting started, a common question is - how do you test your Lambda functions without having to deploy them first?

It's actually pretty easy, but it's even easier when you understand how Node modules work. So, I'll start with a quick overview of Node modules.

### Node modules

Node provides a 'module' object that enables code from one .js file to be loaded by another .js file. The exports.handler if provided by the module object and is used to "export" other objects so they can be referenced and used elsewhere.

Here is an example of a simple Node.js module. Imagine the code is saved to a file named greeting.js.

```Javascript
//greeting.js
module.exports = function(){
    return {
        say: function(){
            console.log("Hello, I am Steve");
        },
        ask: function(){
            console.log("What is your name?");
        }
    };
};
```

Here is how the greeting module (greeting.js) would be used in another file named index.js.

```Javascript
//index.js
var greeting = require("./greeting.js");
var greet = new greeting();
greet.say(); //returns 'Hello, I am Steve'
greet.ask(); //returns 'What is your name?'
```
So that's a super simple example of a Node module. Now, let's look at how that's relevant to Lambda and testing Lambda functions locally.

### Lambda functions are Node modules

After Understanding how modules in Node.js work, you realize that Lambda code written in Javascript / Node.js is implemented as a Node.js module. So, the code you write for your Lambda function can be tested locally (without being deployed to AWS) by simply using it the same way you'd use any other Node module. All you need to do is simulate what would happen if your code was run by Lambda. More specifically, you need to provide the 'event' and 'context' objects that would normally be provided by Lambda.


```Javascript
// ./lambda/custom/index.js
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'LaunchRequest': function () {
    this.emit(':tell', 'Hello World!');
  }
};
```


### Mock event object

The mock event object represents the request that the Alexa Service would send to your skill service (aka your Lambda function). This we'll just save in a .json file named event.json.

TIP: You can use the service simulator in the Amazon Developer Portal to easily create different requests for testing your skill.

**./test/event.json**
```Javascript
{
  "session": {
    "new": false,
    "sessionId": "mock_sessionId",
    "application": {
      "applicationId": "mock_applicationId"
    },
    "attributes": {},
    "user": {
      "userId": "mock_userId"
    }
  },
  "request": {
    "type": "LaunchRequest",
    "requestId": "mock_requestId",
    "locale": "en-US",
    "timestamp": "2017-09-19T11:46:23Z"
  },
  "context": {
    "AudioPlayer": {
      "playerActivity": "IDLE"
    },
    "System": {
      "application": {
        "applicationId": "mock_applicationId"
      },
      "user": {
        "userId": "mock_userId"
      },
      "device": {
        "supportedInterfaces": {}
      }
    }
  },
  "version": "1.0"
}
```

### Mock context object

**./test/context.js**
```Javascript
module.exports = function() {
    return {
        succeed: function(result) {
            console.log(JSON.stringify(result, null,'\t') );
        },
        fail: function(err) {
            console.log(JSON.stringify(err, null,'\t') );
        },
        done: function(err, result) {
            //console.log("CONTEXT DONE:", err, result);
        },
        functionName: 'local_functionName',
        awsRequestId: 'local_awsRequestId',
        logGroupName: 'local_logGroupName',
        logStreamName: 'local_logStreamName',
        clientContext: 'local_clientContext',
        identity: {
            cognitoIdentityId: 'local_cognitoIdentityId'
        }
    };
};
```

### Local test script

**./test/test.js**
```Javascript
var lambda = require('../lambda/custom/index.js');
var context = require('./context.js');
var mockEvent = require('./event.json');

var mockContext = new context();

function callback(error, data) {
  if(error) {
      console.log('error: ' + error);
  } else {
      console.log(data);
  }
}

lambda.handler(mockEvent, mockContext, callback);
```

### Running test.js locally

```bash
$ node test.js
```
