Hey, this is Steve with Dabble Lab.  In this tutorial, we're going to build a skill that streams a video to an Amazon Echo Show, an Echo Dot, or a HD Fire Tablet that's in "Show Mode" using the Alexa Skills Kit VideoApp interface. 

We're going to working from a template that I published on SkillTemplates.com. You can use all of the code to build your own skills. Just head over to SkillTemplates.com and signup for a free membership.

The template is named VideoApp Starter and it uses the Alexa Skills Kit SDK 2.0 for Node.js which is the most current version of the ASK SDK as of today, which is August 8, 2018. 

So I'll start by just showing you how to get to the template and then we'll dive into the code.

### What you'll need
- An Amazon Developer account - https://developer.amazon.com
- An Amazon Web Services account - https://aws.amazon.com
- A free SkillTemplates.com membership - https://skilltemplates.com
- The Alexa Skills Kit CLI installed and configured

### Getting and testing the template

1. Run the following ASK CLI command to get the template. 
`ask --new --template --url https://skilltemplates.com/templates.json`

You'll notice that a new folder is created named `videoapp-starter` - move into that folder.

2. After switching to the `videoapp-starter` folder, use the following command to deploy the skill template.
`ask deploy`

3. When the skill is finished deploying, test it with an Echo Show, Echo Dot, or a Fire Tablet in "Show Mode" by saying...
`Alexa, open VideoApp Starter`

### Modifying the template to use your own video

Let me show you the code and just quickly, like, what's going on in here.  So this template defaults in the skill manifest with the skill name video app-starter and you probably want to change that and all of this information here in the summary, the example phrases.  I've also pointed out the icon, the small and large icons for the skill out to some default images and the next three bucket that I set up, you'll probably want to change that if you're going to publish the skill for your own use.  And then down here you want to change the URL for the privacy policy in the terms of use.  But the rest of it should be set up and ready to go.

Let me see what else you would want to change here.  In the models, you want to change the invocation name.  So if you go to Models, and then the Invocation Name up here, defaults to video app-starter, and you want to change that to whatever invocation name you want to name - and the invocation name is the name that starts the skill up, so "Alexa, start" whatever invocation name would go right here.

At that point you can dive into the code.  If you want to take a look at the skill, this one is pretty simple.  The -- I'm using a video from pixelbay.com, you've seen that under Creative Comments.  Pixelbay is a great place to get videos, by the way; go out there and there's all kinds of a good videos.  And this one is just a relaxing video of a brook or a stream or something like that, but maybe for the holidays you could have a fireplace video or something like that or whatever video you want.  But all you would need to do is get the video that you want and then change out this URL right here.

So this is going to point to wherever the video file is that you're going to be playing.  And then the meta information up here is the title of the video that’s going to show and the subtitles, so that gets passed into the response template here.  And you can change those up.  And then up here, the title I've got a template screen that’s being pulled up that is just showing a blank blue background by default.  You can change this image out if you want to change it up and change the title of the first screen that shows and then also if you wanted to change the text, you can change that here.

Again, this is really simple video skill.  Hopefully, this provides you with a starting point if you're working on your own skill.  If you've got any questions or comments, you can leave those for me and I'll respond just as soon as I can.  If you did find this video valuable, please like it and subscribe to the Dabble Lab channel.  Thanks so much.
