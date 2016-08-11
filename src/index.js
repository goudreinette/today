import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from './components/App'
import Auth from './components/Auth'
import Layout from './components/Layout'
import Today from './components/Today'
import './css/index.css'

const routes = (
    <Route component={App}>
        <Route path="/login" component={Auth}/>
        <Route path="/" component={Layout}>
            <Route path="/today" component={Today}/>
            <Route path="/entries" component={null}/>
            <Route path="/stats" component={null}/>
        </Route>
    </Route>
)


ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('root')
);
