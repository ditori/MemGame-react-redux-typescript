"use strict";
var CardDelaySaga_1 = require("./CardDelaySaga");
var CountDownSaga_1 = require("./CountDownSaga");
var GameRestartSaga_1 = require("./GameRestartSaga");
function* RootSaga() {
    yield [
        CardDelaySaga_1.watchForPairs(),
        CountDownSaga_1.watchDecrement(),
        GameRestartSaga_1.watchGameRestart()
    ];
}
exports.__esModule = true;
exports["default"] = RootSaga;
//# sourceMappingURL=RootSaga.js.map