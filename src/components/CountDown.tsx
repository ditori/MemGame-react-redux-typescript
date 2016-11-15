import * as React from 'react';
import {connect} from "react-redux";
import {Navbar, Nav, NavItem, Modal, Button} from "react-bootstrap";
import {StoreStateIntFace} from "../InterfacesFile";
import {decCountDown, startCountDown, stopCountDown, gameRestart} from "../actions/CountDownActions";

export class CountDown extends React.Component<any, StoreStateIntFace>
{
    constructor()
    {
        super();
    }
    componentWillMount()
    {
         this.props.startCountDown(); //start counter
    }
    CountDownBuilder ()
    {
        const {countDown, openPairs}= this.props;
        const min = Math.floor(countDown / 60);
        const sec = Math.floor(countDown % 60);

        const minStr:string = (min<10) ? `0${min}` : `${min}`;
        const secStr:string = (sec<10) ? `0${sec}` : `${sec}`;

        if (openPairs==8 || countDown==0)   // automatiic stop when finishing the game of the time is off.
        {
             this.props.stopCountDown();
        }

        return <span className="countdown">{`${minStr} : ${secStr}`}</span>;
    }
    render()
    {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a onClick={() => {this.props.stopCountDown()}}>Open Menu</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        {this.CountDownBuilder()}
                    </NavItem>
                </Nav>
                <Modal show={this.props.showModal} onHide={() => {this.props.gameRestart();}}>
                  <Modal.Header closeButton>
                        <Modal.Title>Game Menu</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h2>{this.props.modalText}</h2>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => {this.props.gameRestart();}}>Start New Game</Button>
                  </Modal.Footer>
                </Modal>
            </Navbar>
        );
    }
}

const mapStateToProps = (state: StoreStateIntFace) => {
    const arr = {
        countDown: state.countDown,
        openPairs: state.openPairs,
        showModal: state.modal.showModal,
        modalText: state.modal.modalText
    };
  return arr;
}

export default connect(mapStateToProps, {decCountDown, startCountDown, stopCountDown, gameRestart})(CountDown);
