import React, { Component } from 'react';
import { connect } from "react-redux";
import { pass } from "./actions/";
import "./css/App.css";
import { Wisielec } from './Wisielec';
import { Litery } from './Litery';

export class App extends Component {
  

  render() {
    return (
      <div className="App">
      	<Wisielec />
        <Litery />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    answer: state.answer
  }
};
const mapDispatchToProps = { pass };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);