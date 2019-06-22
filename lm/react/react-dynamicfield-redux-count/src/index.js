import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import counterReducer from "./reducer";
import './index.css';
import App from './App';
import Counter from "./Counter.jsx";
import * as serviceWorker from './serviceWorker';

let store = createStore(counterReducer)

ReactDOM.render(<App />, document.getElementById('root'));
function counter(params) {
    ReactDOM.render(<Counter
        value={store.getState()}
        onIncrement={() => {
            store.dispatch({ type: 'Increment' })
        }} onDecrement={() => {
            store.dispatch({ type: 'Decrement' })
        }}
    />, document.getElementById('redux'))

}
counter()
store.subscribe(()=>{
    counter()
})
serviceWorker.unregister();
