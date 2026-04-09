/* JavaScript to enable drag-scrolling of the forecast section */

// weather API global variables
const weatherUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?days=3&q=';
const weatherOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1f9acc63b6msh0b6caf6a7670d01p1c3e01jsn6ea6c38bdd7a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

/* preparing variables for drag scrolling */
let scrollingBox;
let offsetLeftStart;
let scrollLeftStart;
let isMoving;

/* function to get remote JSON data */
async function getData(url, options) {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

/* update weather display in the DOM based on passed object */
function updateWeather(weatherObject) {
  if (!weatherObject) return;
  // update current weather temp, status, humidity
  document.querySelector("#currentTemp span").innerHTML = weatherObject.current.temp_f;
  document.querySelector("#currentStatus").innerHTML = weatherObject.current.condition.text;
  document.querySelector("#currentHumidity span").innerHTML = weatherObject.current.humidity;

  // output wind speed and direction in a combined string
  const windspeed = weatherObject.current.wind_mph;
  const winddirection = weatherObject.current.wind_dir;
  document.querySelector("#currentWind").innerHTML = `${windspeed} mph ${winddirection}`;

  // find all the future day blocks and loop through them, matching the forecast days in the weather object
  const futureDays = document.querySelectorAll(".futureDay");
  for (let i = 0; i < futureDays.length; i++) {
    const forecastDay = weatherObject.forecast.forecastday[i];
    // update future temp
    futureDays[i].querySelector(".futureTemp").innerHTML = forecastDay.day.maxtemp_f;
    // update future windspeed
    futureDays[i].querySelector(".futureWind").innerHTML = forecastDay.day.maxwind_mph + " mph";
    // update future condition status
    futureDays[i].querySelector(".futureStatus").innerHTML = forecastDay.day.condition.text;
  }
}

/* wait for DOM to load */
document.addEventListener("DOMContentLoaded", () => {
  // Get handle on the forecast container
  scrollingBox = document.querySelector("#futureInfo");
  isMoving = false;

  // Mouse down event
  scrollingBox.addEventListener("mousedown", (e) => {
    scrollLeftStart = scrollingBox.scrollLeft;
    offsetLeftStart = e.pageX;
    isMoving = true;
  });

  // Mouse leave event
  scrollingBox.addEventListener("mouseleave", () => {
    isMoving = false;
  });

  // Mouse up event
  scrollingBox.addEventListener("mouseup", () => {
    isMoving = false;
  });

  // Mouse move event
  scrollingBox.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!isMoving) return;
    scrollingBox.scrollLeft = scrollLeftStart - (e.pageX - offsetLeftStart);
  });

  // Touch support for mobile devices
  scrollingBox.addEventListener("touchstart", (e) => {
    scrollLeftStart = scrollingBox.scrollLeft;
    offsetLeftStart = e.touches[0].pageX;
    isMoving = true;
  });
  scrollingBox.addEventListener("touchmove", (e) => {
    if (!isMoving) return;
    scrollingBox.scrollLeft = scrollLeftStart - (e.touches[0].pageX - offsetLeftStart);
  });
  scrollingBox.addEventListener("touchend", () => {
    isMoving = false;
  });

  // Fetch IP and weather data
  getData("https://api.ipify.org/?format=json", {}).then((result) => {
    const weatherLookupURL = weatherUrl + result.ip;
    getData(weatherLookupURL, weatherOptions).then((weatherResult) => {
      updateWeather(weatherResult);
    });
  });

  // Make the location button show the modal popup
  document.querySelector("#findLocation").addEventListener("click", () => {
    document.body.classList.toggle("showModal");
  });

  // Handle form submit to get new location weather
  document.querySelector("#locationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.body.classList.remove("showModal");
    const newLocation = document.querySelector("#locationBox").value.trim();
    if (!newLocation) return;
    // adding the passed value to the weather URL for lookup
    const weatherLookupURL = weatherUrl + encodeURIComponent(newLocation);
    // use the resulting location to look up weather
    getData(weatherLookupURL, weatherOptions).then((weatherResult) => {
      updateWeather(weatherResult);
    });
  });
});
