export const win = (state = '', action) => {
	switch(action.type){
		case "WINNER":
			return true
		default: 
			return state
	}
}