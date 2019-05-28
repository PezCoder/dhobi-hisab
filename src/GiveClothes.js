import React, { Component } from 'react';
import { giveClothesAction } from './redux/appDuck.js';

export default class GiveClothes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothesCount: '',
      isGiveClothesModalOpen: false,
    };

    this.openGiveClothesModal = this.openGiveClothesModal.bind(this);
    this.closeGiveClothesModal = this.closeGiveClothesModal.bind(this);
    this.handleClothesCountChange = this.handleClothesCountChange.bind(this);
  }

  handleClothesCountChange(e) {
    this.setState({
      clothesCount: parseInt(e.target.value)
    })
  }

  closeGiveClothesModal() {
    this.setState({
      isGiveClothesModalOpen: false,
    })
  }

  openGiveClothesModal() {
    this.setState({
      isGiveClothesModalOpen: true,
    })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={ this.openGiveClothesModal }>Give</button>
        { this.state.isGiveClothesModalOpen &&
            <React.Fragment>
              <div className="opaque-bg" onClick={this.closeGiveClothesModal}></div>
              <div className="receive-modal">
                <label htmlFor="no-of-clothes">No of clothes</label>
                <input id="no-of-clothes" type="number" required value={this.state.clothesCount} onChange={this.handleClothesCountChange} />
                <button onClick={ () => {this.props.onGive(this.state.clothesCount, this.props.currentBalance, this.props.pricePerCloth);this.closeGiveClothesModal() }}>Give</button>
              </div>
            </React.Fragment>
        }
      </React.Fragment>
    );
  }
}
