const argv = require("./src/config/yargs").argv;
const place = require("./src/location/location");
const weather = require("./src/weather/weather");
const timezone = require("./src/time/time");

let getArgumentInfo = async (address) => {
  let addressArray;
  let arrayCount = 1;

  const hasComma = String(address).includes(",");

  if (hasComma) {
    addressArray = address.split(",");
  } else {
    addressArray = [address];
  }

  try {

    if (address === true) {
      throw new Error(
        `enter a valid address option. e.g: yarn start -a "10005, tokyo, São Paulo, lagos, Pluto"`
      );
    }

    let coordinate;
    let temperature;
    let time;

    for (location of addressArray) {
      arrayCount++;
      let trimmedLocation = location.trim();

      coordinate = await place.getPlaceLatLng(trimmedLocation);
      temperature = await weather.getWeather(coordinate.lat, coordinate.lng);
      time = await timezone.getTime(coordinate.lat, coordinate.lng);

      console.log(
        `The current time in ${coordinate.address} is ${time} and the weather is ${temperature}°C`
      );
    }
  } catch (error) {

    if (arrayCount < addressArray.length) {
      console.log(
        `${error.message}, please remove it and run the code again to get weather result for the other locations`
      );
    } else {
      console.log(error.message);
    }

  }
};

getArgumentInfo(argv.address);
