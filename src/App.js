import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { giveClothesAction, receiveClothAction, updateCurrentBalanceAction } from './redux/appDuck.js';
import CardList from './CardList.js';

class App extends Component {
  render() {
    return (
      <div>
        <p className={ this.props.currentBalance < 0 ? 'red' : 'green' }>Balance : { this.props.currentBalance }₹</p>
        <p>Rate : { this.props.pricePerCloth }₹/cloth</p>
        <CardList clothes={this.props.clothes} onReceive={this.props.onReceive} currentBalance={this.props.currentBalance} pricePerCloth={this.props.pricePerCloth} />
        <button onClick={ () => {this.props.onGive(10, this.props.currentBalance, this.props.pricePerCloth) }}>Give</button>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => {
  return {
    clothes: app.clothes,
    currentBalance: app.currentBalance,
    pricePerCloth: app.pricePerCloth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGive: ( count, currentBalance, pricePerCloth ) => {
      dispatch(giveClothesAction({ count }));
      dispatch(updateCurrentBalanceAction({
        updatedBalance: currentBalance - (count * pricePerCloth)
      }));
    },
    onReceive: (id, amountPaid, currentBalance) => {
      dispatch(receiveClothAction({ id }));
      dispatch(updateCurrentBalanceAction({
        updatedBalance: currentBalance + amountPaid
      }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
