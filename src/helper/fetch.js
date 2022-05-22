import axios from "axios";

var weatherData = [];

const getData = (key) => {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: key,
      lat: "0",
      lon: "0",
      callback: "test",
      id: "2172797",
      lang: "null",
      units: "imperial",
      mode: "xml",
    },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "eca2540848msh1c43768fcaf6b02p10b31ajsn633366e92154",
    },
  };
  //sir there is network issue here
  axios
    .request(options)
    .then(function (response) {
      weatherData = response.data;
      weatherData = JSON.parse(
        weatherData.substring(5, weatherData.length - 1)
      );
      console.table(weatherData);
      return weatherData;
    })
    .catch(function (error) {
      console.error(error);
    });
  return weatherData;
};

export { getData, weatherData };
