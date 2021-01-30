import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { TopBar, LivePrices } from 'components'
import { Container, ThemeProvider } from '@material-ui/core'
import Theme from 'styles'
import Store from 'states'
import 'styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <LivePrices />
        <Container maxWidth="lg">
          <TopBar />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
