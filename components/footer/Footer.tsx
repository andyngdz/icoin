import { Grid, Typography } from '@material-ui/core'

const Footer = (): React.ReactElement => {
  return (
    <Grid container>
      <Grid container>
        <Grid item>
          <Typography variant="button">ICoin</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">Methodology</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">About Us</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">Support</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">Our API</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">Rate Comparison</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="button">Legals</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">Terms of Service</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">Privacy Policy</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="button">DISCLAIMER</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="button">FOLLOW US</Typography>
        </Grid>
      </Grid>
      <Grid container></Grid>
    </Grid>
  )
}

export { Footer }
