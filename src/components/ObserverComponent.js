import React, {Component} from "react";
import store from "../store/index";

class ObserverComponent extends Component {

    constructor(props) {
        super(props);
        this.state = store.state;
        this.subscription = null;
    }

    componentDidMount() {
        this.subscription = store.subject.subscribe(nextState => {
            this.setState((state) => {
                return {...state, ...nextState};
            })
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
}

export default ObserverComponent;
