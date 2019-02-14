import React, {Component} from 'react';
import './App.css';

import {default as Model} from '../model';
import CounterIntent from "../intents/counter"


class App extends Component {

    constructor(props) {
        super(props);
        this.state = Model.state;
    }

    componentDidMount() {
        Model.subject.subscribe(appState => {
            const log = {
                oldState: this.state,
                newState: appState
            };
            console.log(log);

            this.setState({...appState});
        });
    }

    render() {
        const { counter } = this.state || {};

        const handleIncrement = () => { CounterIntent.incrementCounter(); };

        const handleDecrease = () => { CounterIntent.decreaseCounter(); };

        return (
            <div className="jumbotron text-center">
                <h1>Welcome to React + RxJS</h1>
                <p>This is a template showcasing RxJS as a dataflow + React + React-router. This project will continue to grown
                    implementing other use full real life examples! (well as close as) </p>
                <div className="center-block text-center">
                    <h1>counter: {counter}</h1>
                    <button className="btn btn-lg btn-primary" onClick={handleDecrease}>decrease</button>
                    {'  '}
                    <button className="btn btn-lg btn-primary" onClick={handleIncrement}>increment</button>
                </div>
            </div>
        );
    }
}

export default App;
