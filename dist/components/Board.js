"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var react_bootstrap_1 = require("react-bootstrap");
var CardActions_1 = require("../actions/CardActions");
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super.call(this) || this;
    }
    Board.prototype.setImage = function (card) {
        return card.open ? "./Imgs/" + card.src : "./Imgs/back-card.jpg";
    };
    Board.prototype.addClearfix = function (card) {
        if (card % 4 == 0)
            return React.createElement(react_bootstrap_1.Clearfix, null);
    };
    Board.prototype.buildBoard = function () {
        var _this = this;
        console.log("rendering Board component");
        return this.props.cardsList.map(function (card) {
            return React.createElement("div", { key: "div_" + card.id },
                React.createElement(react_bootstrap_1.Col, { xs: 3, md: 3, key: "col_" + card.id },
                    React.createElement(react_bootstrap_1.Image, { src: _this.setImage(card), key: "img_" + card.id, onClick: function () { if (!card.open) {
                            return _this.props.onImageClick(card.id);
                        } }, responsive: true })),
                _this.addClearfix(card.id));
        });
    };
    Board.prototype.componentWillMount = function () {
        this.props.callShaffle();
    };
    Board.prototype.render = function () {
        return (React.createElement(react_bootstrap_1.Grid, null,
            React.createElement(react_bootstrap_1.Row, null, this.buildBoard())));
    };
    return Board;
}(React.Component));
exports.Board = Board;
var mapStateToProps = function (state) {
    var arr = {
        cardsList: state.cardsList,
        prevCard: state.prevCard
    };
    return arr;
};
var mapDispatchToProps = function (dispatch) {
    return {
        onImageClick: function (card) {
            dispatch(CardActions_1.cardSelected(card));
            dispatch(CardActions_1.callCheckForPair(card));
        },
        callShaffle: function () {
            dispatch(CardActions_1.shuffleBoard());
        }
    };
};
exports.__esModule = true;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Board);
//# sourceMappingURL=Board.js.map