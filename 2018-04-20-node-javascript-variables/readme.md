# Beginning Node for Alexa Development #2 - Using variables

In this video I explain the differences between using 'var', 'let', and 'const' to declare variables in node/javascript.

This is the second video in a short series for new Alexa developers who are also new to NodeJS or haven't worked much with Javascript.

In the first video I discussed the asynchronous nature of Node which in my opinion is the first thing you need to understand if you're getting started with Node.

The next thing however is to be familiar with how variable work in Javascript - and that's what we'er going to look at in this video.

In Javascript, there are three ways to declare variables, you can use the var, const, or let keywords.

They are all similar in that you can use any of them to hold a value of any type. For example, a string, a numeric value, or an object.

But, there are subtleties about how they work and if you're not familiar with them, you can end up with bugs in your code that can drive you crazy as you try to figure out what's going on.

Let me show you a few examples of things to know and look out for.

An the first thing I'm going to show you is something called variable hoisting. This is default behavior in Javascript where variable that are declared get moved or 'hoisted' to the top of the code scope.

Let's show you how that works...

So, I'm going to start with some simple javascript code that logs the value of a variable called 'name' to the console.

But notice that in the first line of code I'm using the 'name' variable but I don't declare it until the second line.

In many programming languages, using a variable before you've declared it would throw an error.

But in javascript the variable declaration on the second line will get move behind the scenes to the top.

So, when I run my code. I don't see an error but the name is undefined until a value is set on line two.

```javascript
console.log(name);
var name = "steve";
console.log(name);
```
So, behind the scene, here is how the javascript engine is interpreting our code.

```javascript
var name;
console.log(name);
shape = "steve";
console.log(name);
```
You can see the name  declaration is moved to the top.

But, no value is set.

That's why it's undefined when it gets logged the first time.

A point to note here is that you need to declare the variable someplace for it to get hoisted.

If you don't, you will get an error - like this...

Also, the declaration is only hoisted within the code block where the variable is declared.

So, for example.

I'll change this code and move my variable declaration into a function but try to use it outside the function.

You'll see... now we get an error.

But, I can use the variable within any code inside the function.

So, for example, if I declare the variable within an 'if' statement, I can use it outside the if statement as long as I'm using it within the same function.

Alright, in those last examples we used the var keyword to declare our variable.

We have two other options; let and const.

Let's look at the let keyword next.

The syntax is the same - you just replace var with let.

However, when you use the let keyword the declaration won't get hoisted.

So, if you try to use the variable before you've declared it with 'let' you'll get an error.

Also, the let keyword behaves differently than the var keyword inside a function if it's using within a code block such as an 'if' statement.

Let's take a look.

This time I'll change my code to include an 'if' statement inside my function.

I'll declare a variable inside the 'if' statement and try to use the variable outside the 'if' statement but after the declaration.

If I do that using the 'var' keyword - no problem.

However, if I try the same thing with the 'let' keyword - I get an error.

Okay. Now that we've covered var and let we'll take a look at the const keyword.

Again, the syntax is the same, just replace either var or let with const.

Functionally, const works almost exactly like let.

The big difference is that you can't change the value of a variable declared with the const keyword.

That is, unless the change your making is to the properties of an object.

For example.

Say I declare a object variable named person with the keyword const.

I might start with a single property called 'firstName' and assign it the value 'Steve'.

I can change the value Steve by resetting the value of object but I can't reset the entire 'person' variable.

If I try I get an error.

The same is also true if I declared a simple value using the const keyword.

If I try to change it - I get an error.

Okay, that's it for this video.

But as a quick closing point. When I'm building skills using NodeJS.

I never use the var keyword to declare variables.

Sticking with const and let in my experience is the best way to avoid introducing strange errors associated with loose scope and hoisting behavior of javascript.

I'm sure there is a good reason for the var keyword.

I'm just not sure I've figured out what it is - other than perhaps for backwards compatibility, since the let can const keywords are newer.

Anyhow, that's it for now.

I hope this was helpful and that now you're clear on how variables work in javascript

If you have any questions or comments please leave those and I'll respond as quickly as possible.

And, if you found this video valuable, please let others know by liking it and subscribing to the Dabble Lab channel.

Thanks so much.
