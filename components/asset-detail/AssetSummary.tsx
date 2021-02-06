import {
  Typography,
  Button,
  Link,
  Grid,
  Box,
  makeStyles
} from '@material-ui/core'
import { Format, numberFormatter } from 'services'
import { ICommonRoutePrams, IAssetSummary } from 'types'
import { Render } from 'use-react-common'
import { useLivePrice, AssetRankBox, ContainerWrapper } from 'components'
import { useQuery, COIN_INFORMATION } from 'apollo'

interface IAssetSummaryContent extends ICommonRoutePrams {
  summary: IAssetSummary
}

const useStyles = makeStyles(
  theme => ({
    information: {
      paddingBottom: theme.spacing(3)
    }
  }),
  {
    name: 'AssetSummary'
  }
)

const AssetSummary: React.FC<ICommonRoutePrams> = ({ id }) => {
  const { data } = useQuery<IAssetSummary>(COIN_INFORMATION, {
    variables: { id }
  })

  return Render.ensure(
    summary => <AssetSummaryContent id={id} summary={summary} />,
    data
  )
}

const AssetSummaryContent: React.FC<IAssetSummaryContent> = ({
  id,
  summary
}) => {
  const {
    explorer,
    marketCapUsd,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr,
    website
  } = summary.asset
  const classes = useStyles()
  const { price } = useLivePrice(id, priceUsd)

  return (
    <ContainerWrapper>
      <Grid spacing={2} container>
        <Grid xs={12} sm={2} item>
          <AssetRankBox rank={rank} />
        </Grid>
        <Grid xs={12} sm={10} item>
          <Grid container>
            <Grid className={classes.information} spacing={2} container>
              <Grid xs={12} sm={3} item>
                <Typography variant="h6" gutterBottom>
                  {name} ({symbol})
                </Typography>
                <Typography variant="h6">
                  <Box fontWeight="fontWeightBold" component="span">
                    {Format.currency(price)}
                  </Box>
                </Typography>
              </Grid>
              <Grid xs={12} sm={3} item>
                <Typography variant="h6" gutterBottom>
                  Market Cap
                </Typography>
                <Typography variant="h6">
                  <Box fontWeight="fontWeightBold" component="span">
                    {Format.bigNumber(marketCapUsd)}
                  </Box>
                </Typography>
              </Grid>
              <Grid xs={12} sm={3} item>
                <Typography variant="h6" gutterBottom>
                  Volume (24h)
                </Typography>
                <Typography variant="h6">
                  <Box fontWeight="fontWeightBold" component="span">
                    {Format.bigNumber(volumeUsd24Hr)}
                  </Box>
                </Typography>
              </Grid>
              <Grid xs={12} sm={3} item>
                <Typography variant="h6" gutterBottom>
                  Supply
                </Typography>
                <Typography variant="h6">
                  <Box fontWeight="fontWeightBold" component="span">
                    {numberFormatter.format(supply)}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid spacing={2} container>
              <Grid item>
                <Link href={explorer} color="inherit" target="_blank">
                  <Button color="primary" variant="outlined" disableElevation>
                    Explorer
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href={website} color="inherit" target="_blank">
                  <Button color="primary" variant="outlined" disableElevation>
                    Website
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContainerWrapper>
  )
}

export { AssetSummary }
export { AssetSummaryContent }
