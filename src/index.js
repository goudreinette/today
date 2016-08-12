import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from './components/App/App'
import Auth from './components/App/Auth/Auth'
import Layout from './components/App/Layout/Layout'
import Today from './components/App/Layout/Today/Today'


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
