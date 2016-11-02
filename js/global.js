import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Today from '../components/Today'
import FiveDay from '../components/FiveDay'
import Location from '../components/Location'

ReactDOM.render(
    <Router history ={browserHistory}>
        <Route path="/" component={Today} />
        <Route path="/fiveday" component={FiveDay} />
        <Route path="/location" component={Location} />
    </Router>
    , document.getElementById('weather')
)
