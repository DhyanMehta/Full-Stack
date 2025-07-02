const API_KEY = 'YOUR_API_KEY';

document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.innerHTML = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            const cityName = data.name;

            resultDiv.innerHTML = `
        <strong>Weather in ${cityName}:</strong><br>
        Temperature: ${temperature}°C<br>
        Condition: ${condition.charAt(0).toUpperCase() + condition.slice(1)}
      `;
        })
        .catch(error => {
            resultDiv.innerHTML = `Error: ${error.message}`;
        });
});
