Creating a Node.js CLI - Tutorial
========
In this tutorial we'll create a CLI (command line interface) application using Node.js. The app we'll be building will get the current price of a few different cryptocurrncies. 

## Create a folder and git repo
First we'll create a directory for our app and name it `cryptocli`.
```
$ mkdir cryptocli
```
Then we'll change into our new directory.
```
$ cd cryptocli
```
Next we'll create a `package.json` file.
```
$ npm init -y
```
Then install the npm packages we'll be using.
```
$ npm install chalk clear clui figlet inquirer minimist configstore touch --save
```
We'll create a `bin` directory that will hold our executable files.
```
$ mkdir bin
```
In our `bin` directory we'll create a file named `cli.js`.
```
$ touch bin/cli.js
```
Then add a `bin` property to the `package.json` to map the `cryptocli` command name to the `./bin/cli.js` file, an `engines` property to ensure that an appropriate version of node is installed, and a 'preferGlobal' property to warn users that the cli is intended to be installed globally if they aren't doing so. 
```json
{
  "name": "cryptocli",
  "version": "0.0.1001",
  "description": "An example node CLI app that gets current cryptocurrency prices.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "cryptocurrency",
    "dabblelab"
  ],
  "author": "Steve Tingiris <steve@dabblelab.com>",
  "license": "MIT",
  "bin": {
    "cryptocli": "./bin/cli.js"
  },
  "engines": {
    "node": ">=8"
  },
  "preferGlobal": true,
  "dependencies": {
    "chalk": "^2.3.0",
    "clear": "0.0.1",
    "clui": "^0.3.6",
    "configstore": "^3.1.1",
    "figlet": "^1.2.0",
    "inquirer": "^5.0.1",
    "minimist": "^1.2.0",
    "touch": "^3.1.0"
  }
}
```

So that the system knows how to deal with our script, we'll edit our `bin/cli.js` file and add [shebang](https://en.wikipedia.org/wiki/Shebang_%28Unix%29) to the first line.
```
#!/usr/bin/env node
```
add a `lib` directory 
```
$ mkdir lib
```
Options for using the cli locally (without deploying to NPM)
```
$ npm install -g
```
or
```
$ sudo npm link
```
test the CLI
```
$ cryptocli 
```
clean up
```
$ npm uninstall -g
```
or 
```
$ sudo npm unlink
```


### Related Links
- https://medium.com/@the1mills/how-to-test-your-npm-module-without-publishing-it-every-5-minutes-1c4cb4b369be
- https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/
- https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
- https://timber.io/blog/creating-a-real-world-cli-app-with-node/
- http://docopt.org/