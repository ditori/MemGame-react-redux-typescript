import {watchForPairs} from "./CardDelaySaga";
import {watchDecrement} from "./CountDownSaga";
import {watchGameRestart} from "./GameRestartSaga";

export default function* RootSaga()
{
    yield [
        watchForPairs(),
        watchDecrement(),
        watchGameRestart()
    ];
}
