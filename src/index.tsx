import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
//import {combineReducers} from "redux-immutable";

import allReducers from "./reducers/index";
import Board from './components/Board';
import CountDown from './components/CountDown';
import DevTools from './components/DevTool';
import {inisiatState} from "./StoreState";
import RootSaga from "./sagas/RootSaga";

const root= document.getElementById("root");
const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, inisiatState,  compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument()
  ));

 sagaMiddleware.run(RootSaga);

ReactDOM.render(
    <Provider store={store}>
        <div className="board">
            <CountDown />
            <Board/>
        </div>
    </Provider>
    , root
);
