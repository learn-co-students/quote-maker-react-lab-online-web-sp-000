import { createStore } from 'redux'
import rootReducer from './reducers/index'

export default function configureStore(){
  return createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export const store = configureStore()

// Interesting--renamed the return value of the configureStore function
// as the const 'store', but did not need to export that name as default
// only the function to which the new variable refers for it to work
// with the import as 'store' and not configureStore in the index.js file  ???? 
