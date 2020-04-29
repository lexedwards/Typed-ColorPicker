import React, { ReducerState } from 'react';

const context = React.createContext({});

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