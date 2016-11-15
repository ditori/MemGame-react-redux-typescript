"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var ModalComponent = (function (_super) {
    __extends(ModalComponent, _super);
    function ModalComponent() {
        return _super.call(this) || this;
    }
    ModalComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_bootstrap_1.Modal, { show: this.props.showModal, onHide: this.props.changeModalStatus() },
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, null, "Game Menu")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement("h2", null, function () { _this.getTextValue(); })),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { onClick: this.props.showModal }, "Start New Game"))));
    };
    return ModalComponent;
}(React.Component));
exports.ModalComponent = ModalComponent;
exports.__esModule = true;
exports["default"] = ModalComponent;
//# sourceMappingURL=ModalComponent.js.map