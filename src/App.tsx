import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/App.scss';
import { Header } from './components/resume/Header';

class App extends Component {
    render() {
        return (
            <div className="resume">
                <Header
                    name={{ first: 'Graham', last: 'Rogers' }}
                    title="Software Developer"
                />
            </div>
        );
    }
}

export default App;
