//Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', searchButton)


function searchButton(){
    let city = document.querySelector('input').value
    const url = `http://api.weatherapi.com/v1/current.json?key=7cefcbd3fb7f4eeb90312835210710&q=${city}`

    fetch(url)
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            document.querySelector('#city').innerText = data.location.name
            document.querySelector('#state').innerText = data.location.region
            document.querySelector('h3').innerText = data.location.country
            document.querySelector('#tempF').innerText = data.current.temp_f    
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    }