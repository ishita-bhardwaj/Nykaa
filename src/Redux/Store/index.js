import {combineReducers, legacy_createStore, applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';
import orderReducer from '../Reducer/orderReducer';
import nykaReducer from '../Reducer/reducer';

const rootReducer = combineReducers({
  nykaReducer,
  orderReducer,
});

const store = legacy_createStore(rootReducer);
export default store;
