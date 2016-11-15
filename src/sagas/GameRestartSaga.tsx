import { takeEvery } from 'redux-saga';
import {  take, put } from 'redux-saga/effects';

export  function* watchGameRestart()
{
    while (yield take('RESTART_GAME'))
    {
        yield put({ type: 'CHANGE_MODAL_STATUS' });

        yield put({ type: 'SHUFFLE_BOARD' });

        yield put ({type: 'RESET_COUNTDOWN'});

        yield put ({type: 'START_COUNTDOWN'});
    }
}
