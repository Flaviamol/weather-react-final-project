import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    console.log(props);

    const apiKey = "5b769671f81a9e3d00e7c32628f9a548";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="forecast-temperatures">
                        <span className="forecast-temperature-max">19°</span>
                        <span className="forecast-temperature-min">10°</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}