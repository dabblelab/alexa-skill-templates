/*
  This example throws an error because the 'let' keyword is used
  to declare the variable. When using 'let', variable hoisting does not
  occure the way it does if 'var' is used.
*/
console.log(name);
const let = "steve";
console.log(name);
