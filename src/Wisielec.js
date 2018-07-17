import React, {Component} from 'react';
import { connect } from "react-redux";
import { makeAnswer } from "./actions/";

class WisielecClass extends Component{
	
	
	render(){
		return(
			<div>
				sdf
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

export const Wisielec = connect(mapStateToProps, mapDispatchToProps)(WisielecClass);