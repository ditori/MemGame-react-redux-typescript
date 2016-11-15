import {StoreStateIntFace} from "./InterfacesFile";

export const inisiatState : StoreStateIntFace = {
    cardsList: [
        {id: 1, src: "card-1.jpg", open: false},
        {id: 2, src: "card-2.jpg", open: false},
        {id: 3, src: "card-3.jpg", open: false},
        {id: 4, src: "card-4.jpg", open: false},
        {id: 5, src: "card-5.jpg", open: false},
        {id: 6, src: "card-6.jpg", open: false},
        {id: 7, src: "card-7.jpg", open: false},
        {id: 8, src: "card-8.jpg", open: false},
        {id: 9, src: "card-1.jpg", open: false},
        {id: 10, src: "card-2.jpg", open: false},
        {id: 11, src: "card-3.jpg", open: false},
        {id: 12, src: "card-4.jpg", open: false},
        {id: 13, src: "card-5.jpg", open: false},
        {id: 14, src: "card-6.jpg", open: false},
        {id: 15, src: "card-7.jpg", open: false},
        {id: 16, src: "card-8.jpg", open: false}
    ] ,
    prevCard: 16,
    openPairs: 0,
    countDown: 60, // 60(sec) = 1 (min)
    modal: {showModal: false, modalText: "The game stopped in you request, Click on the button below to state new game"}
};
