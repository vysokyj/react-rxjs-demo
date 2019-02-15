import React, {Component} from "react";
import {default as Model} from "../model";

class ObserverComponent extends Component {

    constructor(props) {
        super(props);
        this.state = Model.state;
        this.subscription = null;
    }

    componentDidMount() {
        this.subscription = Model.subject.subscribe(appState => {
            this.setState({...appState});
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
}

export default ObserverComponent;
