const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const access_key = "d6a97f7826cd0b14acf7c2803b346db0"
    const query = `${latitude},${longitude}`;
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}&units=f`;

    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback("Unable to access Weather service.", undefined);
        }
        else if(body.error) {
            callback(body.error.info, undefined);
        }
        else {
            const {weather_descriptions, temperature, feelslike} = body.current;
            callback(undefined, `${weather_descriptions[0]}. It's ${temperature} degrees and feels like ${feelslike}`);
        }
    })
}


module.exports = forecast;