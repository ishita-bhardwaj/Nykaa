import {ORDER_LIST} from '../Action/action';
const INITIAL_STATE = {
  orderdata: [],
};

const nykaReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  //console.log('PAYLOAD', payload);
  switch (type) {
    case ORDER_LIST:
      return {...state, orderdata: payload};
    default:
      return state;
  }
};

export default nykaReducer;
