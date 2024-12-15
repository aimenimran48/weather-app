
const apikey = "1716ab0b526f1c634cea8cbcaf5d7287";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon=document.querySelector(".weather-icon");


async function checkweather(city) {
    const response = await fetch(`${apiurl}&q=${city}&appid=${apikey}`);
   if(response.status==404)
   {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

   }

   else{ 
    var data = await response.json();
    console.log(data);
     document.querySelector("#city").innerHTML=data.name;
     document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"°C";
     document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
     document.querySelector("#wind").innerHTML=data.wind.speed +"km/h";
     if(data.weather[0].main=="Clouds"){
        weather_icon.src="weather-app-img/images/clouds.png"
     }
     else if(data.weather[0].main=="Clear"){
        weather_icon.src="weather-app-img/images/clear.png"
     }
    else if(data.weather[0].main=="Rain"){
        weather_icon.src="weather-app-img/images/rain.png"
     }
     else if(data.weather[0].main=="Drizzle"){
        weather_icon.src="weather-app-img/images/drizzle.png"
     }
     else if (data.weather[0].main=="Mist"){
        weather_icon.src="weather-app-img/images/mist.png"
     }
     document.querySelector(" .weather").style.display="block"
     document.querySelector(".error").style.display="none"; }
}
 
//                      on click
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value); 
})
checkweather(); 