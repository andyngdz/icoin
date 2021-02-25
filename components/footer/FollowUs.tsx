import { Grid, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

const FollowUs = (): React.ReactElement => {
  return (
    <Grid spacing={1} container>
      <Grid item>
        <IconButton size="small">
          <FacebookIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <TwitterIcon size="small" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <InstagramIcon size="small" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <YouTubeIcon size="small" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export { FollowUs }
