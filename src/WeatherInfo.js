import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <ul>
                    <li><FormattedDate/></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row">
                    <div className="col-5 currentlyImgTemp">
                        <img src={props.data.icon} alt={props.data.description} />
                        <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
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
