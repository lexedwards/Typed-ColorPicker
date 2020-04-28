import React, { ReducerState } from 'react';
import { ColorBlock } from './models/colorTyped';

const context = React.createContext({});

interface Store {
  children : React.ReactNode;
  reducer : (state: any, action : Action) => ReducerState<any>;
  initState: ColorBlock ;
}

export interface Action {
  type : string;
  payload : any;
}

export const StoreProvider : React.FC<Store> = ({ children, reducer, initState = {} }) => {
  const [store, dispatch] = React.useReducer( reducer, initState )
  const contextValue = React.useMemo( () => [store, dispatch], [store, dispatch] )

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  )
};

export function useStore() {
  return React.useContext(context)
}