/*
  Although you can't change the value of a variable that was
  declared with the 'const' keyword. You can make changes to
  an object variable that was declared with 'const'. This
  example shows that.
*/
const person = {
  firstName = "Bob"
};

person.firstName = "Steve";
person.lastName = "Tingiris";

console.log(person.firstName + ' ' + person.lastName);
