# A custom Amazon Alexa Skill in 14-minutes

This video walks through creating a simple custom skill using Node.js and AWS Lambda. The goal is to show the high-level steps for creating a custom Alexa skill - from scratch - without using an Amazon Alexa skill blueprint (template). This is a follow-on to a previous video (https://youtu.be/kxdmkz9JWQA), that covered creating an Alexa skill using one of the skill templates provided by Amazon.  

### NOTE: click the image below to view the video on YouTube
[![A custom Amazon Alexa Skill in 14-minutes](http://img.youtube.com/vi/RMUM0hQOq8Q/0.jpg)](http://www.youtube.com/watch?v=RMUM0hQOq8Q)

The AWS Command Line Interface is required for the demo in this video. It can be downloaded from [http://aws.amazon.com/cli](http://aws.amazon.com/cli). 

### basic skill code
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
### Bash code for the publish.sh script

```Bash
SKILL_NAME=$1
NOW=$(date +%s)
ZIP_FILE="$SKILL_NAME-$NOW.zip"

if [ ! -f ./$ZIP_FILE ]; then
  echo "$ZIP_FILE not found. Creating file..."
  chmod -R +rw $SKILL_NAME
  cd $SKILL_NAME
  zip -r  "../$ZIP_FILE" * -x "*.DS_Store"
  echo "$ZIP_FILE created."
  cd ..
  aws lambda update-function-code --function-name $SKILL_NAME --zip-file fileb://$ZIP_FILE
  if [ ! -f ./builds ]; then
    mkdir builds
  fi
  mv $ZIP_FILE ./builds/
fi
```