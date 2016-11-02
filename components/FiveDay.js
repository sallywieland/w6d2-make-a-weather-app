import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import Nav from './Nav'
import Header from './Header'
// must import 'template' JS component files (Nav, Header) in order to use them below.

class FiveDay extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="temperature_text">
                    five day forecast.
                </div>
                <Nav />
            </div>
        )
    }
}

export default FiveDay
