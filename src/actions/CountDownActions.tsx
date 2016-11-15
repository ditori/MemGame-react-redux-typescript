import {StoreStateIntFace, cardAction} from "../InterfacesFile";

export const decCountDown = (): cardAction  =>
{
    //console.log(`countdown still working!`);
    return {
        type: "DECREMENT_COUNTDOWN",
    };
}

export const startCountDown = () : cardAction =>
{
    console.log(`countdown staring!`);
    return {
        type: "START_COUNTDOWN",
    };
}

export const stopCountDown = () : cardAction =>
{
    console.log(`countdown stopping!`);
    return {
        type: "STOP_COUNTDOWN",
    };
}

export const gameRestart = () : cardAction =>
{
    console.log(`staring new game!`);
    return {
        type: "RESTART_GAME",
    };
}
