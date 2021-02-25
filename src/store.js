import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};

// apply middleware (thunk) for async dispatch
const middlewareEnhancer = applyMiddleware(thunk);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;