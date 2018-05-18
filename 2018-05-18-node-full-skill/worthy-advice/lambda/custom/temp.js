const quoteHelper = require('./modules/quoteHelper.js');

async function testMod() {
    await quoteHelper.getQuote().then(function(value){
        let quote = JSON.parse(value).quote;

        console.log(quote);
    }, function(error){
        console.log("problem");
    });
}

testMod();