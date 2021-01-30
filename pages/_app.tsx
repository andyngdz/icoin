import { Provider } from 'react-redux'
import { LivePrices } from 'components'
import { ThemeProvider } from '@material-ui/core'
import Theme from 'styles'
import Store from 'states'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <LivePrices />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
