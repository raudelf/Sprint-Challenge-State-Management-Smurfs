import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// Reducer
import { smurfReducer as reducer } from './components/reducers';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
