const searchForm = document.querySelector(".search-box");
const cityInput = document.getElementById("city-input");
const recentSearchesContainer = document.querySelector(".recent");

// 1. Free Public Weather API (No API Key Required)
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://wttr.in/${encodeURIComponent(city)}?format=j1`
    );

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();
    displayWeather(data, city);
    
    const temp = data.current_condition[0].temp_C;
    saveRecentSearch(city, temp);
  } catch (error) {
    alert("Error: City not found or network issue!");
  }
}

// 2. Weather Data Display Karne Ka Function
function displayWeather(data, searchedCity) {
  const current = data.current_condition[0];
  const area = data.nearest_area[0];
  
  const cityName = area.areaName ? area.areaName[0].value : searchedCity;
  const country = area.country ? area.country[0].value : "";
  const temp = current.temp_C;
  const description = current.weatherDesc[0].value;
  const humidity = current.humidity;
  const windSpeed = current.windspeedKmph;

  let weatherCard = document.getElementById("weather-display-card");
  if (!weatherCard) {
    weatherCard = document.createElement("div");
    weatherCard.id = "weather-display-card";
    weatherCard.style.cssText = `
      margin: 20px auto;
      padding: 20px;
      text-align: center;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      color: #fff;
    `;
    document.querySelector(".search").appendChild(weatherCard);
  }

  weatherCard.innerHTML = `
    <h2><i class="fa-solid fa-location-dot"></i> ${cityName}, ${country}</h2>
    <h1 style="font-size: 2.5rem; margin: 10px 0;">${temp}°C</h1>
    <p style="text-transform: capitalize; font-size: 1.1rem;">${description}</p>
    
    <div style="display: flex; justify-content: space-around; margin-top: 20px;">
      <div>
        <i class="fa-solid fa-droplet"></i>
        <p>Humidity: <strong>${humidity}%</strong></p>
      </div>
      <div>
        <i class="fa-solid fa-wind"></i>
        <p>Wind: <strong>${windSpeed} km/h</strong></p>
      </div>
    </div>
  `;
}

// 3. Recent Searches Save Karne Ka Function
function saveRecentSearch(cityName, temp) {
  let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];

  recentSearches = recentSearches.filter(
    (item) => item.name.toLowerCase() !== cityName.toLowerCase()
  );

  recentSearches.unshift({ name: cityName, temp: temp });
  if (recentSearches.length > 3) recentSearches.pop();

  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  renderRecentSearches();
}

// 4. Recent Searches Render Karne Ka Function
function renderRecentSearches() {
  const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  if (recentSearches.length === 0) return;

  recentSearchesContainer.innerHTML = recentSearches
    .map(
      (item) => `
    <div class="recent-item" style="cursor: pointer; display: flex; align-items: center; gap: 8px; margin-top: 5px;" onclick="fetchWeatherData('${item.name}')">
      <i class="fa-solid fa-location-crosshairs"></i>
      <div>
        <span class="city-name">${item.name}</span>
        <span class="recent-temp">${item.temp}°C</span>
      </div>
    </div>
  `
    )
    .join("");
}

// 5. Form Submit Event
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (city) {
    fetchWeatherData(city);
    cityInput.value = "";
  } else {
    alert("Please enter a city name!");
  }
});

document.addEventListener("DOMContentLoaded", renderRecentSearches);