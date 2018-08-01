import React, {Component} from 'react';
import { connect } from "react-redux";
import { countMistakes } from "./actions/";
import { Canvas } from './canvas';

class WisielecClass extends Component{
	state = {
		randomNumber: Math.floor( Math.random() * 100000 ),
		proverb: ''
	}

	componentWillReceiveProps(newProps){
		if(newProps.proverb !== this.state.proverb) this.setState({proverb: newProps.proverb})

		if(
			newProps.randomNumber !== this.state.randomNumber ||
			newProps.proverb !== this.state.proverb
			) Canvas(this.state.randomNumber, newProps, this.props.mistakes, this.props.proverb)

	}

	render(){
		return(
			<canvas 
				className={`canvas${this.state.randomNumber}`}
				width="400px"
				height="300px">
				<img src={`img/s${this.props.mistakes - 1}.jpg`} alt={`Popełniony błąd ${this.props.mistakes - 1} z 9`} />
			</canvas>
		);
	}
}



const mapStateToProps = (state) => {
  return {
    mistakes: state.answer,
    win: state.win,
    proverb: state.proverb
  }
};
const mapDispatchToProps = { countMistakes };

export const Wisielec = connect(mapStateToProps, mapDispatchToProps)(WisielecClass);