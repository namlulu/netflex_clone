import React, { Component } from 'react';
import Router from 'Components/Router';
import Navigation from 'Components/Header/Navigation';

class App extends Component {
    render() {
        return (
            <Router>
                <Navigation />
            </Router>
        );
    }
}

export default App;
