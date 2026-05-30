const cl = console.log;
const API_KEY = "d6833e70e97e560bb7f2c42e02099c23";
const posts = document.getElementById("posts");
const form = document.getElementById("weather-form");
form.addEventListener("submit", getWeather);
async function getWeather(e) {
    e.preventDefault();
    const city = document.getElementById("city").value;
    const GEO_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    try {
        const geoResponse = await fetch(GEO_URL);
        const geoData = await geoResponse.json();
        cl(geoData);
        const lat = geoData[0].lat;
        const lon = geoData[0].lon;
        const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const weatherResponse = await fetch(WEATHER_URL);
        const weatherData = await weatherResponse.json();
        cl(weatherData);
        posts.innerHTML =
            `
            <h2>${weatherData.name}</h2>
            <p>Температура: ${weatherData.main.temp} °C</p>
            <p>Погода: ${weatherData.weather[0].description}</p>
            `;

    }
    catch (error) {
        cl("Error:", error);
    }
}