function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#currentTemperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let discriptionElement = document.querySelector("#description");
  discriptionElement.innerHTML = response.data.condition.description;
  let feelsLikeElement = document.querySelector("#feelsLike");
  feelsLikeElement.innerHTML = Math.round(response.data.temperature.feels_like);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "06740ta7fb3c0b6bo8bced4f1a40e926";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=06740ta7fb3c0b6bo8bced4f1a40e926&units=metric`;

axios.get(apiUrl).then(displayTemperature);
