import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            feelLike: Math.round(response.data.main.feels_like),
            wind: response.data.wind.speed,
            city: response.data.name,
            date: "Wednesday 07:00"
        });

        setReady(true);
    }

    if (ready) {
        return(
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-5 currentlyImgTemp">
                        <img src={weatherData.iconUrl} alt={weatherData.description} />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Feels Like: {weatherData.feelLike}%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div> 
        );
    } else {
        const apiKey = "48a87ef75599d8b9abc746aba5b5ff62";
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 

        return "loading...";
    }

    
    
}