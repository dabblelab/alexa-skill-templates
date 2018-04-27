const gdax = require("gdax");

const publicClient = new gdax.PublicClient();

publicClient.getProductTicker('BTC-USD', (error, response, data) => {
    if (error) {
      // handle the error
    } else {
      // work with data
      console.log(data.price);  
    }
  });