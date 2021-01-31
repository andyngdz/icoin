import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { TopBar, LivePrices } from 'components'
import { ThemeProvider, makeStyles } from '@material-ui/core'
import Theme from 'styles'
import Store from 'states'
import 'styles/globals.css'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(),
  },
}))

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const classes = useStyles()

  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <LivePrices />
        <div className={classes.container}>
          <TopBar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
