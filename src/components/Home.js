import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Nav from './Nav';
import About from './About';
import PersonForm from './PersonForm';
import EmployeeListProvider from './EmployeeListProvider';

function Home() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/form" component={PersonForm}/>
                <Route path="/list" component={EmployeeListProvider}/>
                <Route path='/' component={About}/>
            </Switch>
        </Router>
    );
}

export default Home;