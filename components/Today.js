import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import Nav from './Nav'
import Header from './Header'

class Today extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = { // setting up the values of state --> making '--' default value while API loads in.
            temp: '--',
            cond: '--'
        }
    }
    componentDidMount() { // this method runs right after render() runs for the first time.
        // built-in function that deals with the React cycle --> often seen with fetches and setTimeouts/Intervals.
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&APPID=315f04ca07ca6e74abbf91a21acbcd1f')
        // grabbing the URL from the website and applying my own key at the end.
        .then(response => response.json()) // fetch() boiler plate.
        .then((data) => { // arrow function for the callback --> 'data 'can be named anything.
            this.setState ({ // setting the new state values for temp & cond for when the fetch completes and grabs API data.
                temp: Math.round(data.main.temp * (9/5) - 459.67), // converting from kelvin to fahrenheit, plus rounding.
                cond: data.weather[0].description
                // grabbing objects from API array from within console.
            })
        })
        }
    render() {
        return (
            <div>
                <Header />
                <div className="temperature_text">
                    {this.state.temp}&deg;
                </div>
                <div className="weather_description_text">
                    {this.state.cond}
                </div>
                <Nav />
            </div>
        )
    }
}
// {this.state.temp} & {this.state.cond} --> grabs from set.state object.
// <Header /> & <Nav /> --> pulling from Header and Nav JS components --> basically templates in order to keep code DRY.

export default Today
