import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Store from 'states'
import Theme from 'styles'

const Providers = ({ children }) => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </Provider>
  )
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
