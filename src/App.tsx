import React, { Component } from 'react';
import { Experience } from './components/resume/Experience';
import { Header } from './components/resume/Header';
import positions from './data/experience.json';
import './sass/App.scss';

class App extends Component {
    render() {
        return (
            <div className="resume">
                <Header
                    name={{ first: 'Graham', last: 'Rogers' }}
                    title="Software Developer"
                />
                <Experience positions={positions} />
            </div>
        );
    }
}

export default App;
