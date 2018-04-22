# How to create a Flash Briefing Skill

[![How to create a Flash Briefing Skill](http://img.youtube.com/vi/CiiLkKNgyhc/0.jpg)](http://www.youtube.com/watch?v=CiiLkKNgyhc)

## Overview
A flash briefing skill adds content to the built-in Alexa flash briefings functionality. A flash briefing skill can provide updates in the form of audio clips or text that Alexa reads to users. Flash Briefing skills are a great way to deliver blog summaries, podcast updates, and timely notifications, among other things.

Each flash briefing skill includes one or more content feeds. So, when users enable flash briefing skills, they can simply say, “Alexa, give me my flash briefing” to hear all of content from each of the flash briefing skills they've enabled.

In this tutorial, we'll walk-through setting up a flash briefing skill from scratch. This is a really simple process with almost zero coding.

## Overview Steps

1. Create an Amazon Web Services Account (AWS)
2. Create an Amazon Developer Account
3. Setup a content feed
4. Setup the flash briefing skill
5. Enable and test your skill
6. Publish your skill

## Step 1: Create an Amazon Web Services Account (AWS)
We will need a way to host our content feed and for this we'll be using Amazon S3 so, if you don't already have an Amazon Web Services (AWS) account, you'll need to signup for one at [aws.amazon.com](http://aws.amazon.com). The signup process will require a credit card but AWS provides a FREE usage tier so you probablly won't have to pay anything unless your skill gets really popular. To lean more about the AWS pricing and the free tier visit [aws.amazon.com/pricing](http://aws.amazon.com/pricing).

## Step 2: Create an Amazon Developer Account
In addition to an AWS account you'll need an Amazon Developer Account. The developer account is FREE but you do need to register at [developer.amazon.com](http://developer.amazon.com). NOTE: Be sure to use the same email address that you used to setup your Amazon Echo if you have an Echo.

## Step 3: Setup a content feed
The content feed for a flash briefing skill can be either [RSS]() or [JSON](). We're going to use JSON and we're going to be creating a feed that has both text content and audio.

  ### Steps to setup a JSON feed
  1. Login to [aws](http://aws.amazon.com) and choose 'S3' under the storage section of the services menu.
  2. Select the 'Create Bucket' button to add a new Bucket
    - Name your bucket
    - Leave the defaults for '2 - Set Properties'
    - Under '3 - Set Permissions' select 'Grant public read access to this bucket' under manage public permissions.
    - Select the 'Create Bucket' button to create the bucket on the '4 - Review' step.
    - Copy the following code into a file named `flash-briefing.json`

  ```json
  [
    {
      "uid": "urn:uuid:1335c695-cfb8-4ebb-abbd-80da344efa6b",
      "updateDate": "2017-10-23T22:34:51.0Z",
      "titleText": "A hello world audio clip",
      "mainText": "",
      "streamUrl": "https://s3.amazonaws.com/flash-briefing-example/flash-briefing-1.mp3",
      "redirectionUrl": "http://youtube.com/dabblelab"
    }
  ]

  ```
    - Open the bucket and upload the `flash-briefing.json` file. Set the permission to 'Grand public read access to this object(s)'

## Step 4: Setup the flash briefing skill
After the feed content is hosted in the S3 bucket we can move on to setting up our flash briefing skill. To do this you'll need to [login to developer.amazon.com](http://developer.amazon.com).

After you're logged in at developer.amazon.com do the following:
  1. Select the 'Alexa' menu then choose the 'Get Started' button for the Alexa Skills Kit.
  2. Select the 'Add New Skill' button
  3. Set the Skill Type to 'Flash Briefing Skill API', give your skill a name and then select the 'Save' button.
  4. Provide the information needed for to add your feed and select save.

## Step 5: Enable and test your skill
Unlike custom skills that are automatically enabled during development, flash briefing skills need to be enabled before you can test them. So, either open the Alexa Companion app or go to [alexa.amazon.com](https://alexa.amazon.com) and enable the skill so you can test it.

## Step 6: Publish your skill
After fully testing your skill, provide the remaining information needed to publish your skill and submit it for certification. After the skill is certified, it will be available for anyone to enable from the skill store.

### Resources
- https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html

- https://developer.amazon.com/docs/flashbriefing/normalizing-the-loudness-of-audio-content.html

- http://www.audacityteam.org/download/

- https://github.com/dabblelab/dabblelab-youtube-channel
