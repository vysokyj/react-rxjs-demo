import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import {default as Model} from "./model";

ReactDOM.render(<App />, document.getElementById("root"));

// logger
Model.subject.subscribe(appState => {
    console.log(appState);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
