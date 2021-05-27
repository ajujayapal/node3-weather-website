const weatherForm = document.querySelector("form");
const search = document.querySelector('input')
const messageError = document.querySelector('#message-error')

const weatherDivs = document.querySelectorAll('span.weather-item')
const locationDiv = document.querySelector('#location')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    weatherDivs.forEach(div => div.innerHTML = '')
    
    const location = search.value
    // /weather?address= + location
    fetch("/weather?address=" + location)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            messageError.innerHTML = data.error
            // console.log(data.error)
        }
        else {

            messageError.innerHTML = ''
        
            weatherDivs.forEach((div) => {

                const key = div.dataset.id;
                
                locationDiv.innerHTML = data.location

                if(key === "weather_descriptions") {
                    div.innerHTML = data.forecast[key][0];
                }
                else if (key === "weather_icons") {
                    const img = document.createElement("img");
                    img.src = data.forecast[key][0];
                    img.alt = "Weather Icon";
                    div.appendChild(img);
                }
                else {
                    div.innerHTML = data.forecast[key];
                }
            })
        }
    })
})