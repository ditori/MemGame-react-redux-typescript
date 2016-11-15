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
        return (React.createElement(react_bootstrap_1.Modal, { show: this.props.showModal, onHide: this.props.hideModal },
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, null, this.props.headerText)),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement("h2", null, this.props.bodyText)),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { onClick: this.props.hideModal }, "Start New Game"))));
    };
    return ModalComponent;
}(React.Component));
exports.ModalComponent = ModalComponent;
exports.__esModule = true;
exports["default"] = ModalComponent;
//# sourceMappingURL=Modal.js.map