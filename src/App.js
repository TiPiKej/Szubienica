import React, { Component } from 'react';
import "./css/App.css";
import { Wisielec } from './Wisielec';
import { Proverb } from './Proverb';
import { Keyboard } from './Keyboard';

export class App extends Component {
  render() {
    return (
      <div className="Wisielec">
      	<Wisielec />
        <Proverb />
        <Keyboard />
      </div>
    );
  }
}