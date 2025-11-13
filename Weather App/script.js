const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');

const apiKey = '70b6c02cf628386456fd14d1d270759d'

weatherForm.addEventListener('submit', async e => {
    e.preventDefault();// prevent form from submitting

    const city = cityInput.value;
    if (city) {
        try{
            const weatherData = await fetchWeather(city);
            displayWeather(weatherData);
        }
        catch(error){
            console.error(error);
            displayError('Failed to fetch weather data. Please try again later.');
        }
    }
});

async function fetchWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

function displayWeather(data) {
    const { name: cityName, 
        main: { temp, humidity }, 
        weather: [{ id, description }] } = data;

        card.innerHTML = `
            <h2>Weather in ${cityName}</h2>
            <p>${emoji(id)} ${description}</p>
            <p>Temperature: ${temp} °C</p>
            <p>Humidity: ${humidity}%</p>
        `;

}

function emoji(weatherId){
    if(weatherId >= 200 && weatherId < 300){
        return '⛈️'; // Thunderstorm
    }
    else if(weatherId >= 300 && weatherId < 500){
        return '🌦️'; // Drizzle
    }
    else if(weatherId >= 500 && weatherId < 600){
        return '🌧️'; // Rain
    }
    else if(weatherId >= 600 && weatherId < 700){
        return '❄️'; // Snow
    }
    else if(weatherId >= 700 && weatherId < 800){
        return '🌫️'; // Atmosphere
    }
    else if(weatherId === 800){
        return '☀️'; // Clear
    }
    else if(weatherId > 800 && weatherId < 900){
        return '☁️'; // Clouds
    }
    else {
        return '❓'; // Unknown
    }

    
}

function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.style.color = 'red';
    card.innerHTML = '';
    card.appendChild(errorDisplay);
}


