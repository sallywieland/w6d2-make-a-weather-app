import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'

const Header = (props) => {
    var city = 'Indianapolis' // setting hard-coded city to Indianapolis
    var date = moment().format('LL') // using moment.js to format the date
    var time = moment().format('LT') // using moment.js to format the time
    // setting vars to easily call within the return code using JSX --> MUCH EASIER THAN DOM.

    return <div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <header>
                            <h1 className="header_text">{city}</h1>
                            <p className="date_text">{date} at {time}</p>
                        </header>
                    </div>
                </div>
            </div>
}

export default Header
