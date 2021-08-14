import React, { Component } from 'react';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output);
    return rounded;
}

// IsBoiling 
const IsBoiling = (props) => {
    const { temperature } = props;
    return temperature >= 100 ? <h1>Water is Boiling</h1> : <h1>Water isn't Boiling</h1>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

// TemperatureInput 
class TemperatureInput extends Component {

    handleChange = (e) => {
        const value = e.target.value;
        this.props.setTemperature(value);
    }

    render() {
        const { temperature, scale } = this.props;
        return (
            <fieldset>
                <legend>Enter Temperature {scaleNames[scale]}</legend>
                <input
                    onChange={this.handleChange}
                    value={temperature}
                    type="number" />
            </fieldset>
        )
    }
}

// TemperatureCalculator (Main Component).
export default class TemperatureCalculator extends Component {
    state = {
        temperature: '',
        scale: '',
    }

    setCelsius = (temperature) => {
        this.setState({ scale: 'c', temperature });
    }
    setFahrenheit = (temperature) => {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <h2>TemperatureCalculator</h2>
                <TemperatureInput temperature={celsius} setTemperature={this.setCelsius} scale="c" />
                <TemperatureInput temperature={fahrenheit} setTemperature={this.setFahrenheit} scale="f" />
                <IsBoiling temperature={celsius} />
            </div>
        )
    }
}
