function displayTemp(response) {
  let tempElement = document.querySelector("#display-temp");
  //let emoji = response.data.condition.icon_url;
  let temperature = Math.round(response.data.temperature.current);
  tempElement.innerHTML = `${temperature}°C`;
  console.log(response.data);
}

function showCity(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#city-search");
  let cityElement = document.querySelector("#city-name");
  let city = searchElement.value;
  let apiKey = "8tof3c447705f967a55524e5a9b1b738";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  cityElement.innerHTML = searchElement.value;

  axios.get(apiUrl).then(displayTemp);
}

function liveDate(date) {
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let liveDay = days[day];
  return `${liveDay} ${hour}:${minute}`;
}

let searchForm = document.querySelector("#form-input");
searchForm.addEventListener("submit", showCity);

let now = new Date();
let currentDetails = document.querySelector("#current");
currentDetails.innerHTML = liveDate(now);
