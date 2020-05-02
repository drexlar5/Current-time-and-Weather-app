## Current Time and Weather CLI Aplication 

## This application uses the following technologies:
* nodeJs
* yargs

Using [Open Weather API](https://openweathermap.org/)

Using [Google Places API](https://developers.google.com/places/web-service/search)

Using [TimezoneDB API](https://timezonedb.com/references/get-time-zone)

## How to run the application
Run **yarn** or **npm install** in your project root directory to generate the node module and install the necessary dependencies.

You then run **yarn start -a "array of locations or postal code"** or **npm start - a "array of locations or postal code"** to run the app. 

### Example:
```
yarn start -a "New York, 10005, Tokyo, São Paulo, Pluto"
```

To test the application run **yarn test** or **npm test**