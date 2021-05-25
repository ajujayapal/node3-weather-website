const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWp1amF5YXBhbCIsImEiOiJjanN1bHh4Y20wNTg5NDNscmxmcmt1dDVpIn0.Pg9kjOCdXcuxdLuSi7jb9w&limit=1`;

    request({url, json: true}, (error, { body }) => {
        if (error) {
          callback("Unable to connect to Geocode service.", undefined);  
        }
        else if (body.features.length === 0) {
            callback("Unable to find location. Please try another search.", undefined);
        }
        else {
            const data = body.features[0];
            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            });
        }
    
    });
} 

module.exports = geocode;