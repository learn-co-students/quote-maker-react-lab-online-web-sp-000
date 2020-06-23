import { combineReducers } from 'redux';
import quotes from './quotes';
import uuid from 'uuid';
 
const id = uuid();

export default combineReducers({
  quotes
});
