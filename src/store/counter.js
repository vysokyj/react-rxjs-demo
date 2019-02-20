import actions from "./actions";
import {ReplaySubject} from "rxjs";

const subject = new ReplaySubject(1);

let state = {
    value: 0
};

actions.incrementCounter.subscribe(() => {
    state = {...state, value: state.value + 1};
    subject.next(state);
});

actions.decreaseCounter.subscribe(() => {
    state = {...state, value: state.value - 1};
    subject.next(state);
});

export default {
    subject: subject,
    state: state
}