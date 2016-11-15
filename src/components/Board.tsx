import * as React from "react";
import {connect} from "react-redux";
import {Grid, Row, Col, Image, Clearfix} from "react-bootstrap";
import {cardSelected, callCheckForPair, shuffleBoard} from "../actions/CardActions";
import {StoreStateIntFace, CardIntFace} from "../InterfacesFile";

export class Board extends React.Component<any, StoreStateIntFace> {
    constructor()
    {
        super();
    }
    setImage(card: CardIntFace)
    {
        // if card is opend then show the card image, if the card  is not opened show the back card image.
        return card.open ? `./Imgs/${card.src}` : "./Imgs/back-card.jpg";
    }
    addClearfix (card:number)
    {
        if (card%4==0)
            return <Clearfix/>
    }
    buildBoard()
    {
        console.log("rendering Board component");
        return this.props.cardsList.map((card:CardIntFace) =>
        {
            return <div key={`div_${card.id}`} >
                <Col xs={3} md={3} key={`col_${card.id}`}>
                    <Image  src={this.setImage(card) } key={`img_${card.id}`} onClick={() =>{if(!card.open) {return this.props.onImageClick(card.id)}}} responsive/>
                </Col>
                {this.addClearfix(card.id)}
            </div>
        });
    }
    componentWillMount()
    {
         this.props.callShaffle();
    }
    render()
    {
        return (
            <Grid>
                <Row>{this.buildBoard()}</Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state: StoreStateIntFace) => {
    const arr = {
        cardsList: state.cardsList,
        prevCard: state.prevCard
    };
  return arr;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onImageClick: (card: number) =>
    {
        dispatch(cardSelected(card)); // openning card
        dispatch(callCheckForPair(card)); // check for pairs
    },
    callShaffle: () =>
    {
        dispatch(shuffleBoard());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
