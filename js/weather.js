const API_KEYS = "4506f554c105117a83630a30222a55e2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4506f554c105117a83630a30222a55e2=${API_KEYS}&units=metric`;
  fetch(url).then((response) => response.json());
  console.log(data.name, data.weather[0].main);
}
function onGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
