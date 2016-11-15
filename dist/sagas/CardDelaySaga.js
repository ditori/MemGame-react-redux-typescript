"use strict";
var redux_saga_1 = require("redux-saga");
var effects_1 = require("redux-saga/effects");
function* delayActionCall(action) {
    var card = Number(action.payload);
    yield effects_1.call(redux_saga_1.delay, 1000);
    yield effects_1.put({ type: 'CHECK_PAIRS', payload: card });
}
exports.delayActionCall = delayActionCall;
function* watchForPairs() {
    yield redux_saga_1.takeEvery("CALL_CHECK_PAIRS", delayActionCall);
}
exports.watchForPairs = watchForPairs;
//# sourceMappingURL=CardDelaySaga.js.map