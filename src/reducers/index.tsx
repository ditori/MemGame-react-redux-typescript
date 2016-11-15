
import {inisiatState} from "../StoreState";
import {StoreStateIntFace} from "../InterfacesFile";
import CardsReducer from "./CardsReducer";
import CountDownReducer from "./CountDownReducer";

const allReducers = (state: StoreStateIntFace, action: any):StoreStateIntFace  => {
    return CountDownReducer(CardsReducer(state, action), action);
};

export default allReducers;
