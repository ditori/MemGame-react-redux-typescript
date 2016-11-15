import {StoreStateIntFace, cardAction} from "../InterfacesFile";

export const cardSelected = (card: number): cardAction  =>
{
    console.log(`card ${card} has been selected`);
    return {
        type: "CARD_SELECTED",
        payload: card
    };
}

export const callCheckForPair = (card: number) : cardAction =>
{
    console.log(`calling check for pair`);
    return {
        type: "CALL_CHECK_PAIRS",
        payload: card
    };
}

export const checkForPair = (card: number) : cardAction =>
{
    console.log(`checking for pair`);
    return {
        type: "CHECK_PAIRS",
        payload: card
    };
}

export const shuffleBoard = (): cardAction =>
{
    console.log(`shuffling game board`);
    return {
        type: "SHUFFLE_BOARD"
    };
}
