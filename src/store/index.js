import { createStore } from "redux";

const initialState = {
  limit: 10,
};
const catsReducer = (state = initialState, action) => {
  if (action.type === "LOAD") {
    return ( { ...state, limit: state.limit + 10 });
  }
  return state;
};

export const store = createStore(catsReducer);
