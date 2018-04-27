/*
  This example illustrates variable hoisting.
  Although the name variable is not declared
  before it's first used, an error is not thrown.
*/
console.log(name);
var name = "Steve";
console.log(name);
