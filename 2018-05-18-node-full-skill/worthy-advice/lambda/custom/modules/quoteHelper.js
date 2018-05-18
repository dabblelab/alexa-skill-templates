const rp = require('request-promise');

const quoteHelper = {};

quoteHelper.getQuote = function() {
    return rp("https://talaikis.com/api/quotes/random/");
}

module.exports = quoteHelper;