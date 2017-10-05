# Persisting Alexa session data in DynamoDB


## Overview

Want to create a custom Alexa skill that remembers information about users? This walkthrough will show you how by outlining the steps for saving user session attributes to DynamoDB.

### NOTE: click the image below to view the video on YouTube
[![A 5-minutes](http://img.youtube.com/vi/cNJvyv0nYaw/0.jpg)](http://www.youtube.com/watch?v=cNJvyv0nYaw)

NOTE: This is a follow-up to my last Alexa video that walks through [creating a basic custom skill](../2017-07-15-01). It would be best to watch that video before this one if you haven't already. 

## Demo Steps

## 1. A simple custom skill

This is code for a super simple custom skill - our starting point.

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

## 2. Add RememberName intenet

Login to the [Amazon Developer Console](http://developer.amazon.com/alexa) and add an intent named 'RememberName' to your 'hello world' skill with one required slot called 'name' and a slot type of AMAZON.US_FIRST_NAME.

Add code to handel RememberName intent

```javascript
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
```

Note the part of the code where the session attribute is set. This is what's going to get persisted to DynamoDB.

```javascript
this.attributes['userName'] = name;
```

## 3 Create DynamoDB table and set dynamoDBTableName

Login to you [Amazon Web Services](http://aws.amazon.com) account and create a DynamoDB table named 'HelloWorld' with a primary key named "userId" with a string data type.

Update your skill code to include the value for dynamoDBTableName link in the example below.

```javascript
exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context, callback);
    alexa.appId = appId;
    // one new line to reference the DynamoDB table
    alexa.dynamoDBTableName = 'HelloWorld';
    alexa.registerHandlers(Handlers);
    alexa.execute();
};
```

## 4. Add code to check for a new / existing user

Update your handler code to promot for the user name and check for the session attribute.

```javascript
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
  }


```

## 5. Deploy and test the the final code

Deploy your Lambda function

```javascript
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  // set dynamodb table name
  alexa.dynamoDBTableName = 'HelloWorld';
  alexa.execute();
};

var handlers = {

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

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome! You introduce yourself by saying: My name is, and then your name.', 'Please introduce yourself by saying: My name is, and then your name.');
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
  },



};

```
## Additional Resources

[https://read.acloud.guru/alexa-node-sdk-session-persistence-and-dynamo-crud-operations-part-i-4c7287aa2365](https://read.acloud.guru/alexa-node-sdk-session-persistence-and-dynamo-crud-operations-part-i-4c7287aa2365)
