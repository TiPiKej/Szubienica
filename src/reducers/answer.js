export const answer = (state = [], action) => {
	switch(action.type){
		case false:
			return action.answer
		case true:
			return action.answer
		default: 
			return state
	}
}