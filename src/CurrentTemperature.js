import React, { useState } from "react";

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState("celcius");

    function getFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function getCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    function fahrenheit() {
        return (props.celcius *9) / 5 + 32;
    }

    if (unit === "celcius") {
        return (
            <div className="CurrentTemperature">
                <span className="temperature">
                    {Math.round(props.celcius)}
                </span>
                <span className="unit">
                    °C|{" "}
                    <a href="/" onClick={getFahrenheit}>°F</a>
                </span>
            </div>
        );
    } else {
        return (
            <div className="CurrentTemperature">
                <span className="temperature">
                    {Math.round(fahrenheit())}
                </span>
                <span className="unit">
                    <a href="/" onClick={getCelcius}>
                        °C
                    </a>{" "}
                    | °F
                </span>
            </div>
        );
    }
}