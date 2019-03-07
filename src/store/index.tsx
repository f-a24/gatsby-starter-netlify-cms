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
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
