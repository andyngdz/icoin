import {
  Typography,
  Button,
  Link,
  Grid,
  Box,
  Paper,
  makeStyles
} from '@material-ui/core'
import { Format, numberFormatter } from 'services'
import { ICommonRouteParams, IAssetSummary } from 'types'
import { Render } from 'use-react-common'
import { useLivePrice, AssetRankBox, ContainerWrapper } from 'components'
import { useQuery, COIN_INFORMATION } from 'apollo'

interface IAssetSummaryContent extends ICommonRouteParams {
  summary: IAssetSummary
}

const useStyles = makeStyles(
  theme => ({
    information: {
      padding: theme.spacing(2)
    }
  }),
  {
    name: 'AssetSummary'
  }
)

const AssetSummary: React.FC<ICommonRouteParams> = ({ id }) => {
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
      <Paper>
        <Grid
          className={classes.information}
          justify="space-between"
          spacing={2}
          container
        >
          <Grid item>
            <AssetRankBox rank={rank} />
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              {name} ({symbol})
            </Typography>
            <Typography variant="h5">
              <Box fontWeight={600} component="span">
                {Format.currency(price)}
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Market Cap
            </Typography>
            <Typography variant="h5">
              <Box fontWeight={600} component="span">
                {Format.currency(marketCapUsd)}
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Volume (24h)
            </Typography>
            <Typography variant="h5">
              <Box fontWeight={600} component="span">
                {Format.currency(volumeUsd24Hr)}
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Supply
            </Typography>
            <Typography variant="h5">
              <Box fontWeight={600} component="span">
                {numberFormatter.format(supply)}
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          justify="flex-end"
          className={classes.information}
          spacing={2}
          container
        >
          <Grid item>
            <Link href={explorer} color="inherit" target="_blank">
              <Button variant="contained" color="primary">
                Explorer
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href={website} color="inherit" target="_blank">
              <Button variant="contained" color="primary">
                Website
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </ContainerWrapper>
  )
}

export { AssetSummary }
export { AssetSummaryContent }
