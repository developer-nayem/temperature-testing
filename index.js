const input = document.getElementById("input");
const icon = document.getElementById("icon");
const cityName = document.getElementById("city");
const temperature = document.getElementById("temperature");
const lead = document.querySelector(".lead");

document.getElementById("button").addEventListener("click", function(){
    if(input.value == ""){
        alert("Enter The City Name")
    }
    else{
       fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=66b77a9becc4d320c4e4e3354847983b')
        .then(res => res.json())
        .then(data => {
            if(input.value = data.name){
                cityName.innerText = data.name;
                temperature.innerText = `${data.main.temp}°C`;
                lead.innerText = data.weather[0].main;
                const img = document.createAttribute("src");
                img.value = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'.png';
                icon.setAttributeNode(img);
                input.value = "";
            }else{
                alert("Place Enter the correct name");
                input.value = "";
            } 
    });  
    };
});




