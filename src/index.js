import React from "react";
import ReactDOM from "react-dom";
import Rune from "./RuneContainer";
import "./sass/main.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import initialState from "./store";

const composeEnhancers = (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__)
    ? composeWithDevTools({
        actionsBlacklist: [/* actions to be ignored in Redux DevTools */]
    })
    : compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
        applyMiddleware(
            createLogger()
            //sagaMiddleware
        )
    )
);

export const RUNE_ID = "12341234-1234-1234-1234-123412341234";

ReactDOM.render(
    <Provider store={store}>
        <Rune />
    </Provider>,
    document.getElementById("root")
);
