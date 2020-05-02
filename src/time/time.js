const axios = require('axios');


const getTime = async ( latitude, longitude ) => {

    const response = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=TKTKHVQ7BKX4&format=json&by=position&lat=${ latitude }&lng=${ longitude }
    `);

    const currentDateAndTime = response.data.formatted;
    const currentTime = currentDateAndTime.split(" ")[1];

    return currentTime;

}


module.exports = {
    getTime
}