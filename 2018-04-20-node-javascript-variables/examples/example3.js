/*
  This example will throw an error because the variable 'name'
  is declared with the 'const' keyword. Variables declared with
  the 'const' keyword can't have their value reset.
*/
const name = "Steve";
name = "Sam";
console.log(name);
