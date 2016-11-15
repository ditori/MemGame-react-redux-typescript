"use strict";
exports.selectCard = function (card) {
    console.log("card $(card.key) has been selected");
    return {
        type: "CARD_SELECTED",
        payload: card
    };
};
//# sourceMappingURL=index.js.map