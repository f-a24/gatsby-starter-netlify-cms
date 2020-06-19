import React, { createContext, Dispatch, useReducer } from 'react';

/* initialState */
const initialState = {
  chapterNo: 0
};

type ContextType = {
  state: typeof initialState,
  dispatch: Dispatch<{ type: 'ADD_NO' }>
}

/* Store */
export const Store = createContext<ContextType | null>(null);

/*Reducer */
const reducer = (state = initialState, action: { type: 'ADD_NO' }) => {
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
export const Provider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
