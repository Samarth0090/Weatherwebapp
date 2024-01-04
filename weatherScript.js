let apiKey = "2c88efe0a36f7fa2ee765efc1e5f5186";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img");
async function getWeatherData() {
    if (userCity.value=="")
    {
        alert("Enter A City Name");
    }
    else
    {
        city = userCity.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let data= await response.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp-273.15)+"°C";
        humidity.innerHTML = data.main.humidity+ "%";
        windInfo.innerHTML = data.wind.speed + "Km/h";
        userCity.value= "";
        if(data.weather[0].main=="Clear")
        {
            weatherImage.src="Clear.png";
        }
        else if(data.weather[0].main=="Snow")
        {
            weatherImage.src="Snow.png";
        }
        else if(data.weather[0].main=="Clouds")
        {
            weatherImage.src="Clouds.png";
        }
        else if(data.weather[0].main=="Drizzle")
        {
            weatherImage.src="Drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            weatherImage.src="Mist.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weatherImage.src="Rain.png";
        }
        console.log(data);
    }
}