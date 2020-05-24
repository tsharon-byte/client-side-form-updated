import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/Home";
import './index.css'
import 'materialize-css'
import {
    BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Home/>
    </Router>,
    document.getElementById('root'));

