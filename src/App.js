import React, { Component } from 'react';
import { connect } from "react-redux";
import { pass } from "./actions/";
import "./css/App.css";
import { Wisielec } from './Wisielec';
import { Litery } from './Litery';
import * as proverbs from './json/proverbs.json';

export class App extends Component {
  componentDidMount(){
    console.log(Math.floor(Math.random() + 1) * proverbs.length )
  }

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