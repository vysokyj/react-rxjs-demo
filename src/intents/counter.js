import {Subject} from "rxjs";

const subjects = {
    incrementCounterSubject: new Subject(),
    decreaseCounterSubject: new Subject()
};

export default {
    subjects,
    incrementCounter: () => subjects.incrementCounterSubject.next(),
    decreaseCounter: () => subjects.decreaseCounterSubject.next()
};