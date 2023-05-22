const key = "14f218aeab3db7ab0eeda14df03068dc";
const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
btn.disabled = true;

input.addEventListener("keyup", (e)=>{
    const value = e.target.balue;
    if(value === ""){
        btn.disabled = true;
        console.log(3)
    }
    else{
        btn.disabled = false;
    }
})


btn.addEventListener("click",()=>{
    const city = input.value;
    console.log(city)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
.then( res => res.json())
.then( data => {
    console.log(data)
    document.querySelector("#img").src ="https://openweathermap.org/img/wn/02d@2x.png" ;
    document.querySelector(".cityName").innerHTML = data.name;
    const t = data.main.temp;
    let temp= Math.round(t - 273.15);
   document.querySelector(".temp").innerHTML= temp + "°C";
   document.querySelector(".lead").innerHTML= data.weather[0].main;
})

        document.querySelector("#input").value= "";
    
})
