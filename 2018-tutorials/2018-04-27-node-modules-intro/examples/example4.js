const example3 = require("./example3.js");

example3.priceDetails("https://api.gdax.com/products/btc-usd/ticker",(err, data)=>{
    console.log(data);
});