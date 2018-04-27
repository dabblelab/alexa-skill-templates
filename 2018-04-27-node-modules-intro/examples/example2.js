/*
    This is an example of using a built-in module 
*/

const https = require("https");
const url = require('url');

function getPrice(endpointUrl, callback) {

    var options = {
        host: url.parse(endpointUrl).hostname,
        port: url.parse(endpointUrl).port,
        method: url.parse(endpointUrl).method,
        path: url.parse(endpointUrl).path,
        headers: {
            'User-Agent': 'Node Client'
          }
    }

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            var result = JSON.parse(returnData);

            return callback(null, result);
        });   

    });
    req.end();
}

getPrice("https://api.gdax.com/products/btc-usd/ticker", (err, data)=>{
    console.log(data);
});
