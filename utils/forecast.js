const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/forecast.json?q=' + latitude + ',' + longitude + '&key=c4a1f906ba8b4dd081d100200211510';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const forecastText = 'It is currently ' + body.current.temp_c +
                ' celsius out. There is a ' + body.current.precip_mm +
                '% chance of rain. and it is currently ' + body.current.condition.text + ' outside. Humidity is ' + body.current.humidity;
            callback(undefined, forecastText);
        }
    });
};

module.exports = forecast;
