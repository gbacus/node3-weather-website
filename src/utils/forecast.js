const request = require("request");

const forecast = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/5282f7a4d39f7f291e4017d5ce21ca5a/${lat},${lng}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      const {
        currently: { temperature, precipProbability },
        daily: { data }
      } = body;
      callback(
        undefined,
        `${data[0].summary} It is currently ${temperature} ${precipProbability}`
      );
    }
  });
};

module.exports = forecast;
