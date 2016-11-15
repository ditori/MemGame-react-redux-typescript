"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var react_bootstrap_1 = require("react-bootstrap");
var CountDownActions_1 = require("../actions/CountDownActions");
var CountDown = (function (_super) {
    __extends(CountDown, _super);
    function CountDown() {
        return _super.call(this) || this;
    }
    CountDown.prototype.componentWillMount = function () {
        this.props.startCountDown();
    };
    CountDown.prototype.CountDownBuilder = function () {
        var _a = this.props, countDown = _a.countDown, openPairs = _a.openPairs;
        var min = Math.floor(countDown / 60);
        var sec = Math.floor(countDown % 60);
        var minStr = (min < 10) ? "0" + min : "" + min;
        var secStr = (sec < 10) ? "0" + sec : "" + sec;
        if (openPairs == 8 || countDown == 0) {
            this.props.stopCountDown();
        }
        return React.createElement("span", { className: "countdown" }, minStr + " : " + secStr);
    };
    CountDown.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_bootstrap_1.Navbar, { fixedTop: true },
            React.createElement(react_bootstrap_1.Navbar.Header, null,
                React.createElement(react_bootstrap_1.Navbar.Brand, null,
                    React.createElement("a", { onClick: function () { _this.props.stopCountDown(); } }, "Open Menu"))),
            React.createElement(react_bootstrap_1.Nav, null,
                React.createElement(react_bootstrap_1.NavItem, null, this.CountDownBuilder())),
            React.createElement(react_bootstrap_1.Modal, { show: this.props.showModal, onHide: function () { _this.props.gameRestart(); } },
                React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                    React.createElement(react_bootstrap_1.Modal.Title, null, "Game Menu")),
                React.createElement(react_bootstrap_1.Modal.Body, null,
                    React.createElement("h2", null, this.props.modalText)),
                React.createElement(react_bootstrap_1.Modal.Footer, null,
                    React.createElement(react_bootstrap_1.Button, { onClick: function () { _this.props.gameRestart(); } }, "Start New Game")))));
    };
    return CountDown;
}(React.Component));
exports.CountDown = CountDown;
var mapStateToProps = function (state) {
    var arr = {
        countDown: state.countDown,
        openPairs: state.openPairs,
        showModal: state.modal.showModal,
        modalText: state.modal.modalText
    };
    return arr;
};
exports.__esModule = true;
exports["default"] = react_redux_1.connect(mapStateToProps, { decCountDown: CountDownActions_1.decCountDown, startCountDown: CountDownActions_1.startCountDown, stopCountDown: CountDownActions_1.stopCountDown, gameRestart: CountDownActions_1.gameRestart })(CountDown);
//# sourceMappingURL=CountDown.js.map