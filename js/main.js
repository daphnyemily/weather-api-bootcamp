//Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', searchButton)

function searchButton(){
    const API_KEY = 'a4f72bc407c3457eb79174947213009'
    let city = document.querySelector('input').value
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}united states&aqi=no`

    fetch(url)
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            // document.querySelector('h3').innerText = data.location.country
            // document.querySelector('h2').innerText = data.location.name
            document.querySelector('#tempF').innerText = data.current.temp_f    
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

