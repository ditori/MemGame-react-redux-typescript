import { takeEvery, delay } from 'redux-saga';
import {  take, put, call, fork, cancel } from 'redux-saga/effects';
import {cardAction} from "../InterfacesFile";


export function* delayActionCall (action:cardAction)
{
    const card= Number(action.payload);
    yield call(delay, 1000);
    yield put({ type: 'CHECK_PAIRS' , payload: card});
}


export function* watchForPairs()
{
    yield takeEvery(`CALL_CHECK_PAIRS`, delayActionCall);
    //console.log("watching For Pairs!");
    /*while (true)
    {
        yield call(delay, 1000);
        yield put({ type: 'CHECK_PAIRS' , payload: card});
    }*/

}
