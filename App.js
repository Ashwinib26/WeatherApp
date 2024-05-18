const apiKeys = "c7f10c715e7562e4616b40807cc07594";
const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKeys + "&q=";

const searchbox = document.querySelector(".inputcity textarea");
const searchbtn = document.querySelector(".inputcity img");
const wtrIcon = document.querySelector(".wtr-icon");

async function CheckWeather(city) {
    const response = await fetch(baseApiUrl + city);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".error").style.display = "none";
        document.querySelector(".place").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%<br>Humidity";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr<br>WindSpeed";

        if(data.weather[0].main == "Clouds") {
            wtrIcon.src = "images/clouds - Copy.png";
        } else if(data.weather[0].main == "Clear") {
            wtrIcon.src = "images/clear - Copy.png";
        } else if(data.weather[0].main == "Rain") {
            wtrIcon.src = "images/rain - Copy.png";
        } else if(data.weather[0].main == "Drizzle") {
            wtrIcon.src = "images/drizzle - Copy.png";
        } else if(data.weather[0].main == "Mist") {
            wtrIcon.src = "images/mist - Copy.png";
        }

        document.querySelector(".weather").style.display = "block";
    }
}

searchbtn.addEventListener("click", () => {
    CheckWeather(searchbox.value);
});
