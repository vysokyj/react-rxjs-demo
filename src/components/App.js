import React, {Component} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import './App.css';
import HomePage from "./HomePage";
import CounterPage from "./CounterPage";
import GithubPage from "./GithubPage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


class App extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="/#/home">RxJS Demo</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/#/home">Home</Nav.Link>
                        <Nav.Link href="/#/counter">Counter</Nav.Link>
                        <Nav.Link href="/#/github">Github</Nav.Link>
                    </Nav>
                </Navbar>
                <Router>
                    <div>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/home" component={HomePage} />
                        <Route path="/counter" component={CounterPage} />
                        <Route path="/github" component={GithubPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
