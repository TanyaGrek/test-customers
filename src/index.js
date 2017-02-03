import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Second from './Second';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory } from 'react-router'

const initialState = [

];

function list(state=initialState, action) {
    if (action.type === 'ADD_ITEM') {
        return [
            ...state,
            {customer: action.customer,
            id: action.id}
        ];
    } else if (action.type === 'ADD_LIST') {
        return [
            ...state,
            {customer: action.customer,
                id: action.id}
        ];
    }
    return state;
}

const store = createStore(list, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/second" component={Second}/>
        </Router>
    </Provider>,
  document.getElementById('root')
);

