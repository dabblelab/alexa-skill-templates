/*
Begining Node.JS for Amazon Alexa Development
*/

function saySomething(callback) {
  let name = 'World';
  setTimeout(function(){
    name = "Steve";
    return callback(null,name);
  },1000);
}

saySomething((err, data)=> {
  console.log(data);
});
