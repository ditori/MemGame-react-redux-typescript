"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return React.createElement("img", { id: "card-$(this.props.key)", src: "../../Imgs/back-card.jpg" });
    };
    return Card;
}(React.Component));
exports.Card = Card;
//# sourceMappingURL=Card.js.map