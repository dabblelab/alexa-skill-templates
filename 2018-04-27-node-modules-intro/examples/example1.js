/*
 This is a simple example that shows how to use the 'url' built-in node module. The built-in 'url' module 
 is just one of many built in Node modules.
*/

const url = require('url');

console.log(url.parse("https://api.gdax.com/products/btc-usd/ticker").hostname);
