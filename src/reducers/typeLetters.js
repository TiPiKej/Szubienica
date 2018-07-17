export const letters = (state = '', action) => {
	switch(action.type){
		case "TYPE_LETTER":
			return action.answer
		default: 
			return state
	}
}