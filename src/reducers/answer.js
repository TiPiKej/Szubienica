export const answer = (state = 0, action) => {
	switch(action.type){
		case "MAKE_MISTAKE":
			return state + 1
		default: 
			return state
	}
}