const apiKey = (`Get the key for file`);
const button = document.querySelector(`#search-button`);

button.addEventListener(`click`, async ()=> {
    const city = document.querySelector(`#user-input`).value;
    let result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    console.log(result);

    let apiLibrary = result.data.location.region;
    let nameOfCountry = document.querySelector(`#country-name`);
    nameOfCountry.textContent = apiLibrary;

    apiLibrary = result.data.location.name;
    let nameOfCity = document.querySelector(`#city-name`);
    nameOfCity.textContent = apiLibrary;

    apiLibrary = result.data.current.condition.text;
    let weatherStats = document.querySelector(`#weather-stat`);
    weatherStats.textContent = apiLibrary;

    apiLibrary = result.data.current.temp_c;
    let tempInC = document.querySelector(`#temp-cel`);
    tempInC.textContent = apiLibrary;

    apiLibrary = result.data.current.temp_f;
    let tempInF = document.querySelector(`#temp-fah`);
    tempInF.textContent = apiLibrary;

    apiLibrary = result.data.current.is_day;
    let dayOrNight = document.querySelector(`#day-cycle`);
});
