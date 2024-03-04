function getLocation(location) {
    const locationURL = 'http://api.openweathermap.org/geo/1.0/direct?q='+ location +'&limit=5&appid='
}   fetch(locationURL).then(function(response) {
    console.log(response)
    return response.json()
})  .then(function(data) {
    console.log(data)
    getWeatherData(data[0])
});