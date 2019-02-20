import React from "react";
import store from "../store";

const AppContext = React.createContext({
    state:  store.state
});

export default AppContext;
