import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import React from 'react'
import Store from 'states'
import Theme from 'styles'

const Testing: React.FC = ({ children }) => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </Provider>
  )
}

export { Testing }
