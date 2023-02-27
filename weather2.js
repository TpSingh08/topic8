let request = require('request');

let apiKey = '0343607511853b82639a4f4792ac79dd';
let location = 'melbourne,AU';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', JSON.parse(body));
}
});