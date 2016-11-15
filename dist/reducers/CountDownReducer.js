"use strict";
var StoreState_1 = require("../StoreState");
var CountDownReducer = function (state, action) {
    if (state === void 0) { state = StoreState_1.inisiatState; }
    switch (action.type) {
        case "DECREMENT_COUNTDOWN":
            {
                var newCountDown = state.countDown - 1;
                return Object.assign({}, state, { countDown: newCountDown });
            }
        case "RESET_COUNTDOWN":
            {
                return Object.assign({}, state, { countDown: StoreState_1.inisiatState.countDown });
            }
        case "CHANGE_MODAL_STATUS":
            {
                var modalStatus = state.modal.showModal ? false : true;
                var newModal = Object.assign({}, state.modal, { showModal: modalStatus });
                return Object.assign({}, state, { modal: newModal });
            }
        case "CHANGE_MODAL_TEXT":
            {
                var openPairs = state.openPairs, countDown = state.countDown;
                var newText = void 0;
                if (openPairs == 8) {
                    var winTime = StoreState_1.inisiatState.countDown - countDown;
                    var min = Math.floor(winTime / 60);
                    var sec = Math.floor(winTime % 60);
                    var minStr = (min < 10) ? "0" + min : "" + min;
                    var secStr = (sec < 10) ? "0" + sec : "" + sec;
                    newText = "Well Done, you finished the game in " + minStr + " minutes and " + secStr + " seconds.";
                }
                else if (countDown == 0) {
                    newText = "Time is over, Good lack next time.";
                }
                else {
                    newText = "The game stopped in you request, Click on the button below to state new game";
                }
                var newModal = Object.assign({}, state.modal, { modalText: newText });
                return Object.assign({}, state, { modal: newModal });
            }
        default:
            {
                return state;
            }
    }
};
exports.__esModule = true;
exports["default"] = CountDownReducer;
//# sourceMappingURL=CountDownReducer.js.map