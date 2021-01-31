import { Link, Typography, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(
  () => ({
    menu: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  }),
  {
    name: 'Menu',
  }
)

const Menu = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid xs={12} sm={8} lg={4} item>
        <div className={classes.menu}>
          <Link color="inherit" href="/">
            <Typography variant="subtitle2">Market Cap</Typography>
          </Link>
          <Link color="inherit" href="/trading-volume">
            <Typography variant="subtitle2">Trading Volume</Typography>
          </Link>
          <Link color="inherit" href="/trading-volume">
            <Typography variant="subtitle2">Trending</Typography>
          </Link>
        </div>
      </Grid>
    </Grid>
  )
}

export { Menu }
