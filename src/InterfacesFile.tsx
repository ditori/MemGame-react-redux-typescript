 // ################# Store inisiat interfaces #################
export interface CardIntFace
{
    id: number,
    src: string,
    open: boolean
}

export interface ModalIntFace
{
    showModal: boolean,
    modalText: string
}

export interface StoreStateIntFace
{
    cardsList: CardIntFace[],
    prevCard: number,
    openPairs: number,
    countDown: number,
    modal: ModalIntFace
}

// ################# Actions interfaces #################

export interface cardAction
{
    type: string,
    payload?: number | string;
}
