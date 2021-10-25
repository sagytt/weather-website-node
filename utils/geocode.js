const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FneXR0IiwiYSI6ImNrdXUzMHllbTBhNXQyb3FvcWFiaTJlN3UifQ.DHpG3amYSnexnkWXXOu6EA';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            // two arguments are going to callback function, 1 is error the 2 is data which now is not defined
            callback('Unable to connect to location service.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;

