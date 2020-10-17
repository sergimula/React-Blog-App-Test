import React, { createContext, useReducer } from 'react'

import reducer from './reducer.js'

export const Context = createContext()
export const DispatchContext = createContext()

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, {})

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </Context.Provider>
  )
}
