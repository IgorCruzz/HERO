import React from 'react'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import Routes from './routes'
import './config/ReactotronConfig'
import { Router } from 'react-router-dom'
import GlobalStyle from './styles/global'
import { store, persistor } from './store'
import history from './services/history'
import ToggleTheme from './styles/themes/context'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import usePersistedState from './utils/usePersistedState'
function App () {
  const [theme, setTheme] = usePersistedState('theme', light)
  const toggleTheme = () => {
    return theme === light ? setTheme(dark) : setTheme(light)
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToggleTheme.Provider value={{
          theme,
          toggleTheme
        }}>
          <ToggleTheme.Consumer>
            {({ theme }) => (
              <ThemeProvider theme={{ theme }}>
                <Router history={history}>
                  <Routes />
                  <GlobalStyle />
                </Router>
                <ToastContainer autoClose={3000}/>
              </ThemeProvider>

            )}
          </ToggleTheme.Consumer>
        </ToggleTheme.Provider>
      </PersistGate>
    </Provider>
  )
}

export default App
