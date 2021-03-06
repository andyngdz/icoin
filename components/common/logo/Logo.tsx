import { Typography, Link, makeStyles } from '@material-ui/core'
import NextLink from 'next/link'

const useStyles = makeStyles(
  theme => ({
    logo: {
      display: 'flex',
      alignItems: 'center'
    },

    image: {
      maxWidth: theme.spacing(5)
    },

    title: {
      paddingLeft: theme.spacing(2)
    }
  }),
  {
    name: 'ICoinLogo'
  }
)

const ICoinLogo = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <NextLink href="/" passHref>
      <Link className={classes.logo} underline="none">
        <img src="/logo.svg" alt="Logo" className={classes.image} />
        <Typography variant="h5" className={classes.title}>
          iCoin
        </Typography>
      </Link>
    </NextLink>
  )
}

export { ICoinLogo }
