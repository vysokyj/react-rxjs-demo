import {ReplaySubject} from "rxjs";
import update from "react-addons-update";
import CounterIntent from "./intents/counter";

const subject = new ReplaySubject(1);

let state = {
    postResult: [],
    results: [],
    counter: 0
};

CounterIntent.subjects.incrementCounterSubject.subscribe(()=> {
    state = update(state, {
        $merge: {
            counter: state.counter + 1
        }
    });
    subject.next(state);
});

CounterIntent.subjects.decreaseCounterSubject.subscribe(()=> {
    state = update(state, {
        $merge: {
            counter: state.counter - 1
        }
    });
    subject.next(state);
});

subject.next(state);

export default {
    subject,
    state
};