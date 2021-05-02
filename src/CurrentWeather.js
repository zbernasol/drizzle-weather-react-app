import React from "react";
import CurrentDate from "./CurrentDate";
import CurrentTemperature from "./CurrentTemperature";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
    return (
        <div className="CurrentWeather">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <CurrentDate date={props.data.date} />
                </li>
                <li>
                    {props.data.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} size={55} />
                        </div>
                        <div className="float-left">
                            <CurrentTemperature celcius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {props.data.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(props.data.wind)} km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}