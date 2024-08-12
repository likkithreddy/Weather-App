// c8cee2615573fec5ca7695c48ed86037
// c8cee2615573fec5ca7695c48ed86037
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=c8cee2615573fec5ca7695c48ed86037
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=c8cee2615573fec5ca7695c48ed86037&units=metric

const apikey = "c8cee2615573fec5ca7695c48ed86037";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const weatherimage =  document.querySelector(".weather img");
const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const error = document.querySelector(".error");
const weather= document.querySelector(".weather");



async function checkWeather(city){
    const responce = await fetch(apiurl +`&q=${city}` +`&appid=${apikey}`);
    
    if(responce.status == 404){
        error.style.display = "block";
        weather.style.display = "none";
        }
        else{
        var data = await responce.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main === "Clouds"){
           weatherimage.src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Clear"){
           weatherimage.src = "images/clear.png";
        }
        else if(data.weather[0].main === "Rain"){
           weatherimage.src = "images/rain.png";
        }
        else if(data.weather[0].main === "Drizzle"){
           weatherimage.src = "images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
           weatherimage.src = "images/mist.png";
        }

        error.style.display = "none";
        weather.style.display = "block";


    }

}

button.addEventListener("click",()=>{
    checkWeather(input.value);
})


