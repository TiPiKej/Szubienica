import React, {Component} from 'react';
import { connect } from "react-redux";
import { makeAnswer } from "./actions/";

class LiteryClass extends Component{
	render(){
		return(
			<div>
				fsas
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
const mapDispatchToProps = { makeAnswer };

export const Litery = connect(mapStateToProps, mapDispatchToProps)(LiteryClass);