import { combineReducers } from 'redux';
import uuid from 'uuid';
import { stat } from 'fs';
 


import quotes from './quotes';
const id = uuid();
export default combineReducers({
  quotes
});
