How to build Alexa skills with Twilio Autopilot - Part 6 - Dabble Lab #115
---

<a href="https://youtu.be/dO1OMinfCnc"><img src="http://img.youtube.com/vi/dO1OMinfCnc/maxresdefault.jpg" alt="How to build Alexa skills with Twilio Autopilot - Part 6 - Dabble Lab #115" height="480" /></a>

## Description

In this video, we look at using information collected by Twilio Autopilot and saving it to a table in AirTable.com.

### Twilio Function Code
The following is the code used for the Twilio function in the tutorial.

```javascript
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
```

≡≡ 100+ MORE TUTORIALS  ≡≡

Subscribe - http://youtube.com/dabblelab

≡≡ CONNECT WITH US  ≡≡

- website - http://dabblelab.com
- twitter - http://twitter.com/dabblelab
- facebook - http://facebook.com/dabblelab