"use strict";
var StoreState_1 = require("../StoreState");
var ModalReducer = function (state, action) {
    if (state === void 0) { state = StoreState_1.inisiatState; }
    switch (action.type) {
        case "SHOW_MODAL":
            {
                var newModal = action.payload;
                return Object.assign({}, state, { countDown: newModal });
            }
        case "HIDE_MODAL":
            {
                var newModal = Object.assign({}, state.modal, { show: false });
                return Object.assign({}, state, { modal: newModal });
            }
        default:
            {
                return state;
            }
    }
};
exports.__esModule = true;
exports["default"] = ModalReducer;
//# sourceMappingURL=ModalReducer.js.map