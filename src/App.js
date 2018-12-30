import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { giveClothesAction } from './redux/appDuck.js';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => {this.props.giveClothes(10) }}>Give</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clothes: state.clothes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    giveClothes: count => {
      dispatch(giveClothesAction({ count }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
