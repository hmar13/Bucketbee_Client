import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

type InitialStateType = {
  signedIn: boolean | null;
  fillForm: boolean | null;
};

const initialState = {
  signedIn: null,
  fillForm: null,
};

export const AuthContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default { AuthContext, Store };
