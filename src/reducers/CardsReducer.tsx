import {inisiatState} from "../StoreState";
import {StoreStateIntFace, CardIntFace, cardAction} from "../InterfacesFile";

const CardsReducer = (state= inisiatState, action: cardAction): StoreStateIntFace =>
{
    const card: number = Number(action.payload) -1;        // card.index= card.id-1
    const {cardsList, prevCard, openPairs} = state;
    let newCardsList: CardIntFace[];

    switch (action.type)
    {
        case "CARD_SELECTED":
        {
            // changing the card open value to true in the cardsList array
            newCardsList= changeCardsList(
                cardsList,
                Object.assign({},cardsList[card], {open:true})
            );
            return Object.assign({}, state, {cardsList: newCardsList});
        }
        case "CHECK_PAIRS":
        {
            if (prevCard!=16) // this is the second card choosen
            {
                if (cardsList[card].src === cardsList[prevCard].src)
                {
                    console.log("a pair was found");
                    return Object.assign({}, state, {prevCard: 16, openPairs: openPairs + 1});
                }
                else
                {
                    console.log("a pair was not found");
                    newCardsList= changeCardsList(
                        cardsList,
                        Object.assign({}, cardsList[card], {open:false}),       // sending card with open set to false
                        Object.assign({}, cardsList[prevCard], {open:false})        // sending prevCard with open set to false
                        //{...cardsList[prevCard], open:false}
                    );
                    console.log(newCardsList);
                    return Object.assign({}, state, {cardsList: newCardsList, prevCard: 16});
                }
            }
            else // this is the first card choosen
            {
                console.log("saving the current card as prevCard");
                return Object.assign({}, state, {prevCard: card});
            }
        }
        case "SHUFFLE_BOARD":
        {
            newCardsList= [...cardsList];  // coping cardsList data to new array newCardsList

            // making sure cards is hidden
            newCardsList.forEach( (card) => {   card.open = false;  });

            // randomizing the number of switches to do between 3-9
            const randRunningTimes: number = Math.floor((Math.random() * 6) + 3);
            for (let i=1;i<=randRunningTimes;i++)
            {
                let cardIdA= 0, cardIdB=0, tmp:number;
                // randomizing 2 different indexes to switch src value
                while (cardIdA==cardIdB)
                {
                    cardIdA= Math.floor((Math.random() * 16) );
                    cardIdB= Math.floor((Math.random() * 16) );
                }

                // calling changeCardsList with the cards and their new src
                newCardsList= changeCardsList(
                    newCardsList,
                    Object.assign({}, newCardsList[cardIdA], {src: newCardsList[cardIdB].src}),
                    Object.assign({}, newCardsList[cardIdB], {src: newCardsList[cardIdA].src})
                )
            }

            return Object.assign({}, inisiatState, {cardsList: newCardsList});
        }
        default:
        {
            return state;
        }
    }
};

/*  INPUT: array of cards objects and cards object/s (CardIntFace)
    OUTPUT: the same array of cards objects from the input, but with changes to the relevant cards.
*/
const changeCardsList = (cardsList:CardIntFace[], cardA:CardIntFace, cardB?:CardIntFace):CardIntFace[] =>
{
    const cardIdA:number = cardA.id-1;      // card.index= card.id-1

    if (cardB == null)
    {
        return [
               ...cardsList.slice(0, cardIdA),
                cardA,
               ...cardsList.slice(cardIdA +1)
       ];
    }

    //  else...
    const cardIdB : number = cardB.id-1;        // card.index= card.id-1

    // pushing the updated cards to their right place in the array
    if (cardIdA > cardIdB)
    {
        return [
               ...cardsList.slice(0, cardIdB),
                cardB,
               ...cardsList.slice(cardIdB +1, cardIdA),
               cardA,
               ...cardsList.slice(cardIdA +1)
       ];
    }
    else if (cardIdA < cardIdB)
    {
        return [
               ...cardsList.slice(0, cardIdA),
                cardA,
               ...cardsList.slice(cardIdA +1, cardIdB),
               cardB,
               ...cardsList.slice(cardIdB +1)
       ];
    }
    else
        return cardsList;
};

export default CardsReducer;
