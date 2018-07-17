import { combineReducers } from "redux";
import {answer} from './answer';
import { proverb } from './proverb';
import { letters } from './typeLetters';
import { win } from './win';

export default combineReducers({
  answer, proverb, letters, win
});
