# Calling an external API from a custom Alexa Skill

In this video we'll walk-through how to request data from an external API in a custom Alexa skill.

For our example, we'll be creating a skill that tells users how many people are currently in space. We'll be using a API that is available from [open-notify.org](http://api.open-notify.org/astros.json) provides the names of astronauts who are currently in space. The purpose of this skill is to demonstrate how an Alexa skill can use data from an external API to generate a response.

http://api.open-notify.org/astros.json

## Topics covered

- creating a new skill project using the ask-cli
- deploying a skill project using the ask-cli
- using the node 'http' module to make an http request
- locally testing a lambda function
