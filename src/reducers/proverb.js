export const proverb = (state = '', action) => {
	switch(action.type){
		case "RANDOMIZE_ANSWER":
			return action.answer.proverb
		default: 
			return state
	}
}