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

async function doThings() {
    try {
        const first = await firstThing();
        const second = await secondThing();
        const third = await thridThing();
        console.log("done")

    } catch(ex) {
        console.log(ex);
    }
}

doThings();