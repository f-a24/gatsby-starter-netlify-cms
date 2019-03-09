import React, { createContext, useReducer } from 'react';

/* initialState */
const initialState = {
  chapterNo: 0
};
/* Store */
export const Store = createContext(undefined);

/*Reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NO': {
      return {
        ...state,
        chapterNo: state.chapterNo + 1
      };
    }
    default:
      return state;
  }
};

/* Provider */
export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('--------', state, dispatch);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
