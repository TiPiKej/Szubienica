import React, { Component } from 'react';
import { connect } from "react-redux";
import { countMistakes, winner, randomProverb } from "./actions/";
import proverbs from './json/proverbs.json';

class ProverbClass extends Component {
	state = {
		letters: [],
		proverb: "Loading...",
		randNumber: 0
	}

	componentDidMount() {
		// random proverb

		let randNumber = Math.floor(Math.random() * proverbs.length);
		if (randNumber === proverbs.length) randNumber -= 1;

		this.props.randomProverb(proverbs[randNumber]);

		this.setState({ randNumber: randNumber + 1 })
	}

	componentWillReceiveProps(newProps) {
		// set new letters to array 

		let letters = this.state.letters.slice();
		letters.push(newProps.lastLetter);
		this.setState({ letters });


		// make secret letters

		let proverb = '';
		let mistake = true;
		let countOfGuessLetters = 0;

		Array.from(newProps.proverb).forEach(el => {
			// checking if letters are inside proverb

			let isLetter = false;
			Array.from(letters).forEach((letter, nr) => {
				if (letter.toLowerCase() === el.toLowerCase()) {
					isLetter = true;

					// checking for possibly mistake

					if (letters.length - 1 === nr) mistake = false;
				}
			})


			// make swap to proverb letters

			proverb += isLetter ? (el) : (
				el.toLowerCase() === " " || el.toLowerCase() === "," ? (
					el.toLowerCase()
				) : (
						"-"
					)
			);


			// adding number to variable(this is checking for win)

			if (isLetter || el.toLowerCase() === " " || el.toLowerCase() === ",") countOfGuessLetters += 1;
		})

		// checking for possibly win

		if ((countOfGuessLetters === newProps.proverb.length) && (this.props.win.length === 0)) this.props.winner();

		// setting proverb
		this.setState({ proverb })

		// calling to image
		if (mistake && !this.state.win) this.props.countMistakes();
	}

	render() {
		return (
			<div>
				<div className="proverb">
					{this.state.proverb}
					<sup>#{this.state.randNumber}</sup>
				</div>
				<div className="letters">
					{this.state.letters.length > 1 ? (<div>Wpisane litery:</div>) : null}
					<div>
						{this.state.letters.map((el, nr) => {
							if (nr === 0 || nr === 1) return <span key={el + nr}>{el}</span>
							else return <span key={el + nr}>, {el}</span>
						})}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		proverb: state.proverb,
		lastLetter: state.letters,
		win: state.win
	}
};
const mapDispatchToProps = { countMistakes, winner, randomProverb };

export const Proverb = connect(mapStateToProps, mapDispatchToProps)(ProverbClass);