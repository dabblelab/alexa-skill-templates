

function firstThing() {
    return new Promise(function(resolve, reject){
        if (Math.random() > .5) {
            resolve("result1");
        } else {
            reject("fail1");
        }
    });
} 

function secondThing() {
    return new Promise(function(resolve, reject){
        if (Math.random() > .5) {
            resolve("result2");
        } else {
            reject("fail2");
        }
    });
} ;

function thridThing() {
    return new Promise(function(resolve, reject){
        if (Math.random() > .5) {
            resolve("result3");
        } else {
            reject("fail3");
        }
    });
} 


//run functions in sequence
// firstThing()
// .then(result2 => secondThing(result2))
// .then(result3 => thridThing(result3))
// .then(function(final) {
//     console.log(final)
// })
// .catch(function(err){
//     console.log(err)
// });

//run all function in parallel
// Promise.all([firstThing,secondThing,thridThing]).then(function(){
//     console.log("all done.")
// });


// //first function to finish wins
Promise.race([firstThing, secondThing, thridThing]).then(function(){
    console.log("first one wins.")
});