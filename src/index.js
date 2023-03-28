import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css';
import { HashRouter } from "react-router-dom"


ReactDOM.render(
    // now using one router for all routing
<HashRouter>
<App />
</HashRouter>, document.getElementById('root'));
