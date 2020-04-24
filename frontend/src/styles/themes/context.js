import React, { createContext } from 'react'

const ToggleTheme = createContext({
  theme: 'yellow',
  toggleTheme: () => {}
})

export default ToggleTheme
