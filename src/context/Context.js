import React, { createContext } from 'react'
import { useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {

// const [nome, setNome] = useState('Dassa')

  const user = {nome: 'dass'}

  return (
    <Context.Provider value={{user}}>
      <h6>{children}</h6>
    </Context.Provider>
  )
}

export default Context