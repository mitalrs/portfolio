import { createContext, useReducer } from 'react';
import { initialState } from './initialState.js';
import { reducer } from './reducer.js';

export const defaultContext = {
  state: initialState,
  dispatch: () => {},
};

export const GlobalContext = createContext(defaultContext);

export const GlobalContextProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state: {
          ...state,
        },
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
