import React from "react";
import ObserverComponent from "./ObserverComponent";
import StressCounter from "./StressCounter";

class HomePage extends ObserverComponent {
    render() {
        const array = [...Array(1000).keys()];
        return (
            <div className="jumbotron text-center">
                <h1>Stress Test</h1>
                { array.map(k => <StressCounter id={k} />)}
            </div>
        );
    }
}

export default HomePage;
