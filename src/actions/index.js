export const makeAnswer = (answer, withoutErr = true) => ({
  type: withoutErr,
  answer
});

export const pass = (answer) => ({
  type: "RANDOMIZE_ANSWER",
  answer
});