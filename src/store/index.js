import actions from "./actions";
import counter from "./counter";
import github from "./github";
import {ReplaySubject} from "rxjs";

const subject = new ReplaySubject(1);

let state = {
    counter: counter.state,
    github: github.state,
};

counter.subject.subscribe((counter) => {
    state = {...state, counter: counter};
    subject.next(state);
});

github.subject.subscribe((github) => {
    state = {...state, github: github};
    subject.next(state);
});

export default {
    state: state,
    subject: subject,
    actions: actions,
    incrementCounter: () => actions.incrementCounter.next(),
    decreaseCounter: () => actions.decreaseCounter.next(),
    fetchGithubRepositories: (user) => actions.fetchGithubRepositories.next(user)
};