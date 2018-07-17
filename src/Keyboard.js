import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeAnswer } from './actions/';

export class KeyboardClass extends Component{
	state = {
		wrap: null,
		limit: 10
	}

	componentDidMount(){
		const letters = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
		let wrap = [];

		Array.from(letters).forEach((letter, nr) => {
			wrap.push(
				<button 
					key={nr} 
					onClick={el => {if(this.props.mistakes < this.state.limit) this.props.makeAnswer(letter)}}
					className="letter">
					{letter}
				</button>
			);
		});

		this.setState({wrap})
	}

	render(){
		return(
			<div className="keyboard">
				{this.state.wrap}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
  	mistakes: state.answer
  }
};
const mapDispatchToProps = { makeAnswer };

export const Keyboard = connect(mapStateToProps, mapDispatchToProps)(KeyboardClass);