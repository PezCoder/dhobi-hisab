import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { giveClothesAction } from './redux/appDuck.js';

class App extends Component {
  render() {
    console.log('clothes in props', this.props.clothes);
    return (
      <div>
        <ul>
          { this.props.clothes && this.props.clothes.map(cloth => (
            <li key={cloth.id}>{ cloth.count }</li>
          )) }
        </ul>
        <button onClick={ () => {this.props.giveClothes(10) }}>Give</button>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => {
  return {
    clothes: app.clothes,
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
