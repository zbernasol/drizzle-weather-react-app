import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";


import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready:false });
    const [city, setCity] = useState(props.currentCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
        });
    }

    function weatherSearch() {
        
        let apiKey = "32c86be80fc849ae3b75447b99a90612";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);  
    }

    function handleSubmit(event) {
        event.preventDefault();
        weatherSearch();
    }

    function cityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form  onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." autoFocus="on" required onChange={cityChange}/>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search"/>
                        </div>
                    </div>
                </form>
                <CurrentWeather data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    }





}