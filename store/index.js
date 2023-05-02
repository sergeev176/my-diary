import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { recordsReducer } from './recordsReducer';
import { inputReducer } from './inputReducer';
import { buttonReducer } from './buttonReducer';


const rootReducer = combineReducers({
    records: recordsReducer,
    inputValue: inputReducer,
    disabled: buttonReducer,

})

export const store = createStore(rootReducer, composeWithDevTools());