"use strict";
var StoreState_1 = require("../StoreState");
var CardsReducer = function (state, action) {
    if (state === void 0) { state = StoreState_1.inisiatState; }
    var card = Number(action.payload) - 1;
    var cardsList = state.cardsList, prevCard = state.prevCard, openPairs = state.openPairs;
    var newCardsList;
    switch (action.type) {
        case "CARD_SELECTED":
            {
                newCardsList = changeCardsList(cardsList, Object.assign({}, cardsList[card], { open: true }));
                return Object.assign({}, state, { cardsList: newCardsList });
            }
        case "CHECK_PAIRS":
            {
                if (prevCard != 16) {
                    if (cardsList[card].src === cardsList[prevCard].src) {
                        console.log("a pair was found");
                        return Object.assign({}, state, { prevCard: 16, openPairs: openPairs + 1 });
                    }
                    else {
                        console.log("a pair was not found");
                        newCardsList = changeCardsList(cardsList, Object.assign({}, cardsList[card], { open: false }), Object.assign({}, cardsList[prevCard], { open: false }));
                        console.log(newCardsList);
                        return Object.assign({}, state, { cardsList: newCardsList, prevCard: 16 });
                    }
                }
                else {
                    console.log("saving the current card as prevCard");
                    return Object.assign({}, state, { prevCard: card });
                }
            }
        case "SHUFFLE_BOARD":
            {
                newCardsList = cardsList.slice();
                newCardsList.forEach(function (card) { card.open = false; });
                var randRunningTimes = Math.floor((Math.random() * 6) + 3);
                for (var i = 1; i <= randRunningTimes; i++) {
                    var cardIdA = 0, cardIdB = 0, tmp = void 0;
                    while (cardIdA == cardIdB) {
                        cardIdA = Math.floor((Math.random() * 16));
                        cardIdB = Math.floor((Math.random() * 16));
                    }
                    newCardsList = changeCardsList(newCardsList, Object.assign({}, newCardsList[cardIdA], { src: newCardsList[cardIdB].src }), Object.assign({}, newCardsList[cardIdB], { src: newCardsList[cardIdA].src }));
                }
                return Object.assign({}, StoreState_1.inisiatState, { cardsList: newCardsList });
            }
        default:
            {
                return state;
            }
    }
};
var changeCardsList = function (cardsList, cardA, cardB) {
    var cardIdA = cardA.id - 1;
    if (cardB == null) {
        return cardsList.slice(0, cardIdA).concat([
            cardA
        ], cardsList.slice(cardIdA + 1));
    }
    var cardIdB = cardB.id - 1;
    if (cardIdA > cardIdB) {
        return cardsList.slice(0, cardIdB).concat([
            cardB
        ], cardsList.slice(cardIdB + 1, cardIdA), [
            cardA
        ], cardsList.slice(cardIdA + 1));
    }
    else if (cardIdA < cardIdB) {
        return cardsList.slice(0, cardIdA).concat([
            cardA
        ], cardsList.slice(cardIdA + 1, cardIdB), [
            cardB
        ], cardsList.slice(cardIdB + 1));
    }
    else
        return cardsList;
};
exports.__esModule = true;
exports["default"] = CardsReducer;
//# sourceMappingURL=CardsReducer.js.map