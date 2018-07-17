import React, {Component} from 'react';
import { connect } from "react-redux";
import { countMistakes } from "./actions/";

class WisielecClass extends Component{
	state = {
		randomNumber: Math.floor( Math.random() * 100000 )
	}

	zrobionyCanvas = false;

	componentDidMount(){
		if(this.zrobionyCanvas){
			const canvas = document.querySelector(`.canvas${this.state.randomNumber}`);
			const context = canvas.getContext('2d')

			console.log(context)
		}
	}

	render(){
		if(this.props.win) return <div>Wygrana!!!</div>
		else if(this.zrobionyCanvas){
			return(
				<canvas 
					className={`canvas${this.state.randomNumber}`}>
					<img src={`img/s${this.props.mistakes - 1}.jpg`} alt={`Popełniony błąd ${this.props.mistakes - 1} z 9`} />
				</canvas>
			);
		}else{
			return <img src={`img/s${this.props.mistakes - 1}.jpg`} alt={`Popełniony błąd ${this.props.mistakes - 1} z 9`} />
		}
	}
}



const mapStateToProps = (state) => {
  return {
    mistakes: state.answer,
    win: state.win
  }
};
const mapDispatchToProps = { countMistakes };

export const Wisielec = connect(mapStateToProps, mapDispatchToProps)(WisielecClass);