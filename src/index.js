import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Home/Home'
import App from './App'
import Expand from './Header/Contents/Expand'
import Health from './Content/Contents/Health'
import Wecare from './Content/Contents/Wecare'
import Allowance from './Content/Contents/Allowance'


import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()


ReactDOM.render(
    <Router history={customHistory}>
         <div>
            <Route exact path="/" component={Home} />
            <Route path="/App" component={App} />
            <Route path="/Expand" component={Expand}/>
            <Route path="/Health" component={Health}/>
            <Route path="/Wecare" component={Wecare}/>
            <Route path="/Allowance" component={Allowance}/>
         
             
        </div>
    </Router>, document.getElementById('root'));