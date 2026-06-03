const API_KEY_COUNTRY = "7f9896ce653e2451784fa5a4305a0ee3e5ce61411e5e7c1e28e1283ee884137c";
const API_KEY_WEATHER = "d6833e70e97e560bb7f2c42e02099c23";
const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");
const result = document.getElementById("result");
const btnWeather = document.getElementById("btnWeather");
loadCountries();
countrySelect.addEventListener("change", loadCities);
btnWeather.addEventListener("click", getWeather);
async function loadCountries() {
    const response = await fetch("https://api.countrystatecity.in/v1/countries",
        {
            headers: {
                "X-CSCAPI-KEY": API_KEY_COUNTRY
            }
        }
    );
    const countries = await response.json();
    for (let i = 0; i < countries.length; i++) {
        const countryCode = countries[i].iso2;
        countrySelect.innerHTML +=
            `<option value="${countryCode}">
                ${countries[i].name}
            </option>`;
    }
}
async function loadCities() {
    citySelect.innerHTML = '<option value="">Оберіть місто</option>';
    const countryCode = countrySelect.value;
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/cities`,
        {
            headers: {
                "X-CSCAPI-KEY": API_KEY_COUNTRY
            }
        }
    );
    const cities = await response.json();
    for (let i = 0; i < cities.length; i++) {
        citySelect.innerHTML +=
            `<option value="${cities[i].name}">
                ${cities[i].name}
            </option>`;
    }
}
async function getWeather() {
    const city = citySelect.value;
    if (city == "") {
        return;
    }
    const geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY_WEATHER}`
    );
    const geoData = await geoResponse.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&units=metric`
    );
    const weatherData = await weatherResponse.json();
    const weather = weatherData.weather[0].main;
    let image = "";
    if (weather == "Clear") {
        image = "\u2600";
    }
    else if (weather == "Rain" || weather == "Drizzle") {
        image = "\u{1F327}";
    }
    else {
        image = "\u2601";
    }

    result.innerHTML =
        `
        <h2>${weatherData.name}</h2>
        <p>Температура: ${weatherData.main.temp} °C</p>
        <p>${image}</p>
        `;
}