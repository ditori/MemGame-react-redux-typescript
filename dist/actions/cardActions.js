"use strict";
exports.cardSelected = function (card) {
    console.log("card $(card.key) has been selected");
    return {
        type: "CARD_SELECTED",
        payload: card
    };
};
//# sourceMappingURL=cardActions.js.map