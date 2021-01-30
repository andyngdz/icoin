import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import Colors, { gray2, primary } from 'styles/colors'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },

    common: Colors,
  },

  typography: {
    fontFamily: "'Inter', sans-serif;",
    body1: { color: gray2 },
    button: { color: gray2 },
    subtitle2: { color: gray2 },
  },
})

export default responsiveFontSizes(Theme)
