import React from "react";
import ObserverComponent from "./ObserverComponent";
import store from "../store";

class StressCounter extends ObserverComponent {
    render() {
        const handleIncrement = () => { store.incrementCounter(); };
        const handleDecrease = () => { store.decreaseCounter(); };
        return (
            <div>
                <h3>Counter {this.props.id}: {this.state.counter.value}</h3>
                <button className="btn btn-lg btn-primary" onClick={handleDecrease}>decrease</button>
                {'  '}
                <button className="btn btn-lg btn-primary" onClick={handleIncrement}>increment</button>
            </div>
        );
    }
}

export default StressCounter;
