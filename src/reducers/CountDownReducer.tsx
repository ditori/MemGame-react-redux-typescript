import {inisiatState} from "../StoreState";
import {StoreStateIntFace, cardAction, ModalIntFace} from "../InterfacesFile";

const CountDownReducer= (state= inisiatState, action: cardAction): StoreStateIntFace =>
{
    switch (action.type)
    {
        case "DECREMENT_COUNTDOWN":
        {
            const newCountDown: number= state.countDown - 1;
            return Object.assign({}, state, {countDown: newCountDown});
        }
        case "RESET_COUNTDOWN":
        {
            return Object.assign({}, state, {countDown: inisiatState.countDown});
        }
        case "CHANGE_MODAL_STATUS":
        {
            const modalStatus:boolean= state.modal.showModal ? false : true;    // modalStatus= !(showModal)
            const newModal:ModalIntFace = Object.assign({}, state.modal, {showModal: modalStatus});
            return Object.assign({}, state, {modal: newModal});
        }
        case "CHANGE_MODAL_TEXT":
        {
            const {openPairs, countDown} = state;
            let newText: string;
            if (openPairs==8)
            {
                const winTime= inisiatState.countDown - countDown; 
                const min = Math.floor(winTime / 60);
                const sec = Math.floor(winTime % 60);

                const minStr:string = (min<10) ? `0${min}` : `${min}`;
                const secStr:string = (sec<10) ? `0${sec}` : `${sec}`;

                newText= `Well Done, you finished the game in ${minStr} minutes and ${secStr} seconds.`;
            }
            else if (countDown==0)
            {
                newText= `Time is over, Good lack next time.`;
            }
            else
            {
                newText= "The game stopped in you request, Click on the button below to state new game";
            }
            const newModal:ModalIntFace = Object.assign({}, state.modal, {modalText: newText});
            return Object.assign({}, state, {modal: newModal});
        }
        default:
        {
            return state;
        }
    }
}

export default CountDownReducer;
