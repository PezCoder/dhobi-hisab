import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { giveClothesAction, receiveClothAction } from './redux/appDuck.js';

class App extends Component {
  render() {
    console.log('clothes in props', this.props.clothes);
    return (
      <div>
        <ul>
          { this.props.clothes && this.props.clothes.map(cloth => (
            <React.Fragment key={cloth.id}>
              <li className={ cloth.received ? 'received' : 'given' }>{ cloth.count }</li>
              <button onClick={ () => {this.props.receiveCloth(cloth.id)} }>Receive</button>
            </React.Fragment>
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
    },
    receiveCloth: id => {
      dispatch(receiveClothAction({ id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
