export default async function useWeather() {
    const axios = require('axios');
    let lat, lon;
    lat = 39.41
    lon = 21.73

    const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
    const urlweather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + weatherApiKey;

    try {
        const response = await axios.get(urlweather);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
    // axios.get(urlweather)
    //     .then(function (response) {
    //         return response.data;
    //     }
    //     )
    //     .catch(function (error) {
    //         console.log(error);
    //     }
    //     )
}