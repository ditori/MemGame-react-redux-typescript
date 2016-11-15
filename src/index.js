"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var index_1 = require("./reducers/index");
var App_1 = require("./components/App");
var StoreState_1 = require("./StoreState");
var store = redux_1.createStore(index_1.default, StoreState_1.inisiatState);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.default, null)), document.getElementById("root"));
