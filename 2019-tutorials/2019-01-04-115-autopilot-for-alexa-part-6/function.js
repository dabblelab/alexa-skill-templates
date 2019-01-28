// this is code for a twilio function used in the tutorial located at https://youtu.be/dO1OMinfCnc

exports.handler = function (context, event, callback) {

  let memory = JSON.parse(event.Memory)
  let rating_scale = memory.twilio.collected_data.rate_service.answers.rating_scale.answer || '';
  let rating_recomend = memory.twilio.collected_data.rate_service.answers.rating_recomend.answer || '';

  responseObject = {
    "actions": [
      {
        "say": {
          "speech": `You rated us a ${rating_scale} on a scale of one to ten and said ${rating_recomend} when asked if you would recommend us to a friend.`
        }
      }
    ]
  };

  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: context.AIRTABLE_API_KEY }).base('appHp9oKemef21ryC');

  let values = {
    rating: rating_scale,
    would_recomend: rating_recomend,
    date: Date.now()
  };

  base('ratings').create(values, function (err, record) {
    if (err) { console.error(err); return; }
    console.log(record.getId());
    callback(null, responseObject);
  });
};