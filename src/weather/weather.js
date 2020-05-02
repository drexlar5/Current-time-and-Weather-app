const axios = require('axios');



const getWeather = async ( latitude, longitude ) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=32f843d833c38373032f825c4a92418a&units=metric`)

    return response.data.main.temp;

}


module.exports = {
    getWeather
}
