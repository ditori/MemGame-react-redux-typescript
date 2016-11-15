"use strict";
var CardsReducer_1 = require("./CardsReducer");
var CountDownReducer_1 = require("./CountDownReducer");
var allReducers = function (state, action) {
    return CountDownReducer_1["default"](CardsReducer_1["default"](state, action), action);
};
exports.__esModule = true;
exports["default"] = allReducers;
//# sourceMappingURL=index.js.map