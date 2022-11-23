import {ACCOUNT_DATA} from '../Action/action';
const INITIAL_STATE = {
  data: [],
};

const nykaReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ACCOUNT_DATA:
      return {...state, data: payload};
    default:
      return state;
  }
};

export default nykaReducer;
