import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <ul>
                    <li><FormattedDate/></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                        <div className="col-4">
                          <WeatherIcon code={props.data.icon} size={64} />  
                        </div>
                        <div className="col-8">
                          <WeatherTemperature celsius={Math.round(props.data.temperature)} />  
                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Feels Like: {props.data.feelLike}%</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}
