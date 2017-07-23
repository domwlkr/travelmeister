import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './containers/Home';
import './App.css';

const App = () => (
    <Router>
        <div className="App">
            <div className="App-header">
                <h2>Travelmeister</h2>
            </div>

            <Route exact path="/" component={Home} />
        </div>
    </Router>
);

export default App;
