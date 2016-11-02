import React from 'react'
import { Link } from 'react-router'

const Nav = (props) => {
    return <footer className="footer_position">
        <div className="col-sm-4">
            <Link to="/">
                <button type="button" className="btn btn-block button_style">today's temperature</button>
            </Link>
        </div>
        <div className="col-sm-4" id="no_padding">
            <Link to="/fiveday">
                <button type="button" className="btn btn-block button_style">five day forecast</button>
            </Link>
        </div>
        <div className="col-sm-4">
            <Link to ="/location">
                <button type="button" className="btn btn-block button_style">change location</button>
            </Link>
        </div>
    </footer>
}

export default Nav
