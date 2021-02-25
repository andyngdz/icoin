import { ContainerWrapper, PaperWrapper } from 'components'
import { Grid, Typography, Link } from '@material-ui/core'
import NextLink from 'next/link'

const Footer = (): React.ReactElement => {
  return (
    <PaperWrapper square>
      <ContainerWrapper>
        <Grid spacing={3} direction="row" container>
          <Grid xs={3} item>
            <Grid spacing={1} direction="column" container>
              <Grid item>
                <Typography variant="button">ICoin</Typography>
              </Grid>
              <Grid item>
                <NextLink href="#" passHref>
                  <Link>
                    <Typography variant="body2">Methodology</Typography>
                  </Link>
                </NextLink>
              </Grid>
              <Grid item>
                <NextLink href="#" passHref>
                  <Link>
                    <Typography variant="body2">About Us</Typography>
                  </Link>
                </NextLink>
              </Grid>
              <Grid item>
                <NextLink href="#" passHref>
                  <Link>
                    <Typography variant="body2">Support</Typography>
                  </Link>
                </NextLink>
              </Grid>
              <Grid item>
                <NextLink href="#" passHref>
                  <Link>
                    <Typography variant="body2">Our API</Typography>
                  </Link>
                </NextLink>
              </Grid>
              <Grid item>
                <NextLink href="#" passHref>
                  <Link>
                    <Typography variant="body2">Rate Comparison</Typography>
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={3} item>
            <Grid spacing={1} direction="column" container>
              <Grid item>
                <Typography variant="button">Legals</Typography>
              </Grid>
              <Grid item>
                <NextLink href="#" passHref>
                  <Link>
                    <Typography variant="body2">Terms of Service</Typography>
                  </Link>
                </NextLink>
              </Grid>
              <Grid item>
                <NextLink href="#" passHref>
                  <Link>
                    <Typography variant="body2">Privacy Policy</Typography>
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={3} item>
            <Grid spacing={1} direction="column" container>
              <Grid item>
                <Typography variant="button">DISCLAIMER</Typography>
              </Grid>
              <Grid item>
                ICoin is an open-source project for tracking cryptocurrencies
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={3} item>
            <Grid spacing={1} direction="column" container>
              <Grid item>
                <Typography variant="button">FOLLOW US</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </PaperWrapper>
  )
}

export { Footer }
