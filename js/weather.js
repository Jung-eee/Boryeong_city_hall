const weather = document.querySelector(".weather-box p");
const sky = document.querySelector(".fine_dust p");
const wind = document.querySelector(".wind p");
const API_KEY = "f8f4c311956429cd2320e3da9ff72825";

function onGeoOk(position) {
  const lat = 36.349;
  const lon = 126.598;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // city.innerText = data.name;
      // console.log(city.text);
      weather.innerText = `${Math.floor(data.main.temp)}℃`;
      if(data.weather[0].description == "clear sky") {
        sky.innerText = "좋음";
      } else {
        sky.innerText = "나쁨";
      }
      wind.innerText = `${data.wind.speed}ms`
    });
}
function onGeoError() {
  console.log("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
