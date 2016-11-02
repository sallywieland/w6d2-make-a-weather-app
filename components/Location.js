import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { Link } from 'react-router'
import Nav from './Nav'
import Header from './Header'
// must import 'template' JS component files (Nav, Header) in order to use them below.

class Location extends React.Component {
    constructor(props) {
        super(props)
    }
        render() {
            return (
                <div>
                    <Header />
                    <div className="temperature_text">
                        change location.
                    </div>
                    <Nav />
                </div>
            )
        }
}
export default Location
