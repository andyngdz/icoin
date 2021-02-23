import {
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  ClickAwayListener,
  Fade,
  fade,
  makeStyles
} from '@material-ui/core'
import { throttle } from 'lodash'
import { DURATION } from 'data'
import { ContainerWrapper } from 'components'
import { useState, ChangeEvent } from 'react'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(
  theme => ({
    search: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    },

    input: {
      zIndex: 1102
    },

    overlay: {
      position: 'fixed',
      backgroundColor: fade(theme.palette.common.white, 0.75),
      zIndex: 1101,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }),
  {
    name: 'Search'
  }
)

const Search = (): React.ReactElement => {
  const classes = useStyles()
  const [touch, setTouch] = useState(false)

  const onChange = throttle((event: ChangeEvent<HTMLInputElement>) => {
    console.info(event)
  }, DURATION * 4)

  return (
    <section>
      <Paper className={classes.search} square>
        <ContainerWrapper>
          <ClickAwayListener onClickAway={() => setTouch(false)}>
            <TextField
              placeholder="Search for cryptocurrencies"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              onClick={() => setTouch(true)}
              onChange={onChange}
              className={classes.input}
              fullWidth
            />
          </ClickAwayListener>
        </ContainerWrapper>
      </Paper>
      <Fade in={touch}>
        <div className={classes.overlay} />
      </Fade>
    </section>
  )
}

export { Search }
