"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var redux_saga_1 = require("redux-saga");
var index_1 = require("./reducers/index");
var Board_1 = require("./components/Board");
var CountDown_1 = require("./components/CountDown");
var DevTool_1 = require("./components/DevTool");
var StoreState_1 = require("./StoreState");
var RootSaga_1 = require("./sagas/RootSaga");
var root = document.getElementById("root");
var sagaMiddleware = redux_saga_1["default"]();
var store = redux_1.createStore(index_1["default"], StoreState_1.inisiatState, redux_1.compose(redux_1.applyMiddleware(sagaMiddleware), DevTool_1["default"].instrument()));
sagaMiddleware.run(RootSaga_1["default"]);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement("div", { className: "board" },
        React.createElement(CountDown_1["default"], null),
        React.createElement(Board_1["default"], null))), root);
//# sourceMappingURL=index.js.map