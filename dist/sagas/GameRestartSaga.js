"use strict";
var effects_1 = require("redux-saga/effects");
function* watchGameRestart() {
    while (yield effects_1.take('RESTART_GAME')) {
        yield effects_1.put({ type: 'CHANGE_MODAL_STATUS' });
        yield effects_1.put({ type: 'SHUFFLE_BOARD' });
        yield effects_1.put({ type: 'RESET_COUNTDOWN' });
        yield effects_1.put({ type: 'START_COUNTDOWN' });
    }
}
exports.watchGameRestart = watchGameRestart;
//# sourceMappingURL=GameRestartSaga.js.map