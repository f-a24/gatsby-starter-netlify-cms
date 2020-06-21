import * as React from 'react';

const initialState = {
  chapterNo: 0
};

type ContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<{ type: 'ADD_NO' }>;
};

/* Store */
export const Store = React.createContext<ContextType | null>(null);

/* Reducer */
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
export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
