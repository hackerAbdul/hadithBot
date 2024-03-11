const twit = require('twit');
const fs = require('fs')


var T = new twit({
    consumer_key:       `${process.env.CONSUMER_KEY}`,
  consumer_secret:      `${process.env.CONSUMER_SECRET}`,
  access_token:         `${process.env.ACCESS_TOKEN}`,
  access_token_secret:  `${process.env.ACCESS_TOKEN_SECRET}`,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true
})

// //use a counter that tracks what cell number its on and tweet the cell number after it 
// //yesterday tweeted cell 1 counter is currently on 1 so new tweet will take from cell 2 & update counter

// //tweet function

function tweet(message){

    T.post('statuses/update', { status: message }, function(err, data, response) {
        console.log(data)
    })
}

tweet(`Ramadan Mubarak 

taqaballah min wa minkum`)