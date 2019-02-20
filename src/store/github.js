import actions from "./actions";
import {ReplaySubject} from "rxjs";
import { ajax } from "rxjs/ajax";

const subject = new ReplaySubject(1);

let state = {
    loading: false,
    user: null,
    repositories: []
};

function fetchStart(user) {
    state = {...state, user: user, loading: true};
    subject.next(state);
}

function fetchSuccess(user, repositories) {
    state = {
        ...state,
        loading: false,
        user: user,
        repositories: repositories
    };
    subject.next(state);
}

actions.fetchGithubRepositories.subscribe((user) => {
    fetchStart(user);
    ajax.getJSON("https://api.github.com/users/" + user + "/repos")
        .subscribe(repos => fetchSuccess(user, repos));
});


export default {
    subject: subject,
    state: state
}