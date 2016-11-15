import { takeEvery, delay } from 'redux-saga';
import {  take, put, call, fork, cancel } from 'redux-saga/effects';

export function* decrementCountDown()
{
    try{
        while(true)
        {
            yield call(delay, 1000);
            yield put({ type: 'DECREMENT_COUNTDOWN' });
        }
    }
    finally
    {
        /*if (yield cancelled)
        {
        }*/
    }
}

export  function* watchDecrement()
{
    while (yield take(`START_COUNTDOWN`))
    {
        const cntdwn= yield fork(decrementCountDown);

        yield take(`STOP_COUNTDOWN`);

        yield cancel(cntdwn);

        yield put({ type: 'CHANGE_MODAL_TEXT' });

        yield put({ type: 'CHANGE_MODAL_STATUS' });
    }
}
