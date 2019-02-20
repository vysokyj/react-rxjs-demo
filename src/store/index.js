import actions from "./actions";
import counter from "./counter";
import {ReplaySubject} from "rxjs";

const subject = new ReplaySubject(1);

let state = {
    counter: counter.state
};

counter.subject.subscribe((counter) => {
    state = {...state, counter: counter}
    subject.next(state);
});

export default {
    state: state,
    subject: subject,
    actions: actions,
    incrementCounter: () => actions.incrementCounter.next(),
    decreaseCounter: () => actions.decreaseCounter.next()
};