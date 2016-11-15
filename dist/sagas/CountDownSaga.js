"use strict";
var redux_saga_1 = require("redux-saga");
var effects_1 = require("redux-saga/effects");
function* decrementCountDown() {
    try {
        while (true) {
            yield effects_1.call(redux_saga_1.delay, 1000);
            yield effects_1.put({ type: 'DECREMENT_COUNTDOWN' });
        }
    }
    finally {
    }
}
exports.decrementCountDown = decrementCountDown;
function* watchDecrement() {
    while (yield effects_1.take("START_COUNTDOWN")) {
        var cntdwn = yield effects_1.fork(decrementCountDown);
        yield effects_1.take("STOP_COUNTDOWN");
        yield effects_1.cancel(cntdwn);
        yield effects_1.put({ type: 'CHANGE_MODAL_TEXT' });
        yield effects_1.put({ type: 'CHANGE_MODAL_STATUS' });
    }
}
exports.watchDecrement = watchDecrement;
//# sourceMappingURL=CountDownSaga.js.map