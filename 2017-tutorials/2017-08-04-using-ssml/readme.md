# Using SSML in custom Alexa skills

[![Using SSML in custom Alexa skills](http://img.youtube.com/vi/FucapfzyVKM/0.jpg)](http://www.youtube.com/watch?v=FucapfzyVKM)

This video provides a quick introduction to SSML or Speech Synthesis Markup Language and a short walkthrough demo on how to use SSML to have more control over how Alexa speaks text in a custom skill.

Alexa supports a subset of [Speech Synthesis Markup Language (SSML)](https://www.w3.org/TR/speech-synthesis/) which can be used to gain more control over how Alexa speaks the text sent by a skill response. For example, you might use SSML to have Alexa read a string of digits as a telephone number rather than the actual number. That's the example we're using for this demo, but there is a lot more you can do with SSML. Check out the [SSML tags supported by the Alexa Skills Kit are listed here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#ssml-supported) for details and more examples.

## Demo Steps

For this example, we're going to use SSML to have alexa say a telephone number rather than the numeric value of digits. This demo modifies the [hello-world code](./01-hello-world) - so the final code from that demo is our starting point.

### Step 1: Update the Intent Schema and sample utterances

Use the following json code to update the intent schema for your hello world skill. You'll do this in the [Developer Console](http://developer.amazon.com/alexa).

  ```json
  {
    "intents": [
      {
        "intent": "CapturePhoneNumber"
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

Also update the sample utterances with the following.

```text
CapturePhoneNumber tell me my phone number
CapturePhoneNumber what is my phone number
CapturePhoneNumber say my phone number
```

### Step 2: Replace the index.js in your Lambda code with the following.
```javascript
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
    var phoneNumber = "8135750530";
    //var phoneNumber = '<say-as interpret-as="telephone">8135750530</say-as>';
    this.emit(':tell', `Your phone number is ${phoneNumber}.`);
  },
  'Unhandled': function (){
    this.emit(':tell', 'Sorry, I dont understand.');
  }
};
```

### Step 3: Deploy your Lambda code

Use the deploy.sh script to deploy your updated Lambda code.

```bash
SKILL_NAME="alexa-demo"
CODE_DIR="src"
NOW=$(date +%s)
ZIP_FILE="$SKILL_NAME-$NOW.zip"

if [ ! -f ./$ZIP_FILE ]; then
  echo "$ZIP_FILE not found. Creating file..."
  chmod -R +rw $CODE_DIR
  cd $CODE_DIR
  zip -r  "../$ZIP_FILE" * -x "*.DS_Store"
  echo "$ZIP_FILE created."
  cd ..
  if [ ! -f ./deployments ]; then
    mkdir deployments
  fi
  aws lambda update-function-code --function-name $SKILL_NAME --zip-file fileb://$ZIP_FILE > ./deployments/$SKILL_NAME-$NOW.json
  mv $ZIP_FILE ./deployments/
fi
```

### Step 4: Test your skill

  you: Alexa, open hello world

  alexa: To hear your phone number, say: tell me my phone number

  you: tell me my phone number

  alexa: your phone number is: eight billion, one hundred thirty-five million, seven hundred fifty thousand, five hundred thirty

### Step 5: Change the index.js code to use SSML and re-test.

Change the comment for the phoneNumber variable in the index.js code, deploy and re-test to hear Alexa speak the phone number properly.

```javascript
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
```

### Resources
[Alexa SSML Reference](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
