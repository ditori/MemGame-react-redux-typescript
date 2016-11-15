"use strict";
exports.decCountDown = function () {
    return {
        type: "DECREMENT_COUNTDOWN"
    };
};
exports.startCountDown = function () {
    console.log("countdown staring!");
    return {
        type: "START_COUNTDOWN"
    };
};
exports.stopCountDown = function () {
    console.log("countdown stopping!");
    return {
        type: "STOP_COUNTDOWN"
    };
};
exports.gameRestart = function () {
    console.log("staring new game!");
    return {
        type: "RESTART_GAME"
    };
};
//# sourceMappingURL=CountDownActions.js.map