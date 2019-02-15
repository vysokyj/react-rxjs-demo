import React from "react";
import ObserverComponent from "./ObserverComponent";
import {default as Model} from "../model";

class HomePage extends ObserverComponent {

    constructor(props) {
        super(props);
        this.state = Model.state;
    }

    render() {
        const { counter } = this.state || 0;

        return (
            <div className="jumbotron text-center">
                <h1>HOME</h1>
                <h1>Current counter state: {counter}</h1>
            </div>
        );
    }
}

export default HomePage;
