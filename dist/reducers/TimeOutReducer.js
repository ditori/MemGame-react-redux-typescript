"use strict";
var core_js_1 = require("core-js");
var StoreState_1 = require("../StoreState");
var TimeOutReducer = function (state, action) {
    if (state === void 0) { state = StoreState_1.inisiatState; }
    switch (action.type) {
        case "CARD_SELECTED":
            {
                var card = action.payload;
                var cardsList = state.cardsList, prevCard = state.prevCard;
                if (prevCard != 0) {
                    var newCardsList = void 0;
                    console.log(state);
                    console.log("card: " + card + ", prevCard: " + prevCard);
                    if (cardsList[card].src !== cardsList[prevCard].src) {
                        console.log("TimeOutReducer 1");
                        setTimeout(function () { console.log("time is out!"); }, 3000);
                        if (card > prevCard) {
                            console.log("TimeOutReducer 2");
                            newCardsList = cardsList.slice(0, prevCard).concat([
                                core_js_1.Object.assign({}, cardsList[prevCard], { open: false })
                            ], cardsList.slice(prevCard + 1, card), [
                                core_js_1.Object.assign({}, cardsList[card], { open: false })
                            ], cardsList.slice(card + 1));
                            return core_js_1.Object.assign({}, state, { cardsList: newCardsList, prevCard: 0 });
                        }
                        else if (card < prevCard) {
                            console.log("TimeOutReducer 3");
                            newCardsList = cardsList.slice(0, card).concat([
                                core_js_1.Object.assign({}, cardsList[card], { open: false })
                            ], cardsList.slice(card + 1, prevCard), [
                                core_js_1.Object.assign({}, cardsList[prevCard], { open: false })
                            ], cardsList.slice(prevCard + 1));
                            return core_js_1.Object.assign({}, state, { cardsList: newCardsList, prevCard: 0 });
                        }
                    }
                }
                return state;
            }
        default:
            {
                return state;
            }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TimeOutReducer;
//# sourceMappingURL=TimeOutReducer.js.map