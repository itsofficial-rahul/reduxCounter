import { DECRIMENT_COUNTER, INCRIMENT_COUNTER } from "../action/Incriment";

const intialState = {
  count: 0,
};

export const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case INCRIMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECRIMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
