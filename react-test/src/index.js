import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import { Provider } from "react-redux";

// Create Store, Wrap the Provider Component to the App
const store = createStore(reducers);

const MainApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}



ReactDOM.render(<MainApp />, document.getElementById("root"));
