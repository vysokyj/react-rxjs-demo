import React from "react";
import ObserverComponent from "./ObserverComponent";

class HomePage extends ObserverComponent {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>HOME</h1>
                {/*<h1>Current counter state: {this.state.counter.value}</h1>*/}
            </div>
        );
    }
}

export default HomePage;
