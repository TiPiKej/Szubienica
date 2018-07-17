export const makeAnswer = (answer) => ({
  type: "TYPE_LETTER",
  answer
});

export const countMistakes = (answer, withoutErr = true) => ({
  type: "MAKE_MISTAKE",
  answer
});

export const randomProverb = (answer) => ({
  type: "RANDOMIZE_ANSWER",
  answer
});

export const winner = (stepNr = 0) => ({
	type: "WINNER",
	stepNr
})