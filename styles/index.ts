import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

const Theme = createMuiTheme({
  palette: {
    primary: teal,
    text: {
      primary: '#333333'
    }
  },

  props: {
    MuiLink: {
      underline: 'none'
    }
  },

  typography: {
    fontSize: 13,
    fontFamily: "'Inter', sans-serif;"
  }
})

export default responsiveFontSizes(Theme)
