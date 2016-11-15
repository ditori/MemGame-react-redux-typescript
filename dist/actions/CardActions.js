"use strict";
exports.cardSelected = function (card) {
    console.log("card " + card + " has been selected");
    return {
        type: "CARD_SELECTED",
        payload: card
    };
};
exports.callCheckForPair = function (card) {
    console.log("calling check for pair");
    return {
        type: "CALL_CHECK_PAIRS",
        payload: card
    };
};
exports.checkForPair = function (card) {
    console.log("checking for pair");
    return {
        type: "CHECK_PAIRS",
        payload: card
    };
};
exports.shuffleBoard = function () {
    console.log("shuffling game board");
    return {
        type: "SHUFFLE_BOARD"
    };
};
//# sourceMappingURL=CardActions.js.map