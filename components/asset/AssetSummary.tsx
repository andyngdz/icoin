import {
  Container,
  Typography,
  Button,
  Link,
  makeStyles
} from '@material-ui/core'
import { Format } from 'services'
import { IAssetSummary } from 'types'
import { Render } from 'use-react-common'
import { useQuery, COIN_INFORMATION } from 'apollo'
import { usePriceDirection } from 'components'

interface IAssetSummaryProps {
  id: string
}

const useStyles = makeStyles(
  theme => ({
    wrapper: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundColor: theme.palette.primary.light
    },

    container: {
      color: theme.palette.common.white
    },

    information: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },

    firstRow: {
      paddingBottom: theme.spacing(2)
    }
  }),
  {
    name: 'AssetSummary'
  }
)

const AssetSummary: React.FC<IAssetSummaryProps> = ({ id }) => {
  const { data } = useQuery<IAssetSummary>(COIN_INFORMATION, {
    variables: { id }
  })

  return Render.ensure(summary => <AssetSummaryContent {...summary} />, data)
}

const AssetSummaryContent: React.FC<IAssetSummary> = ({ asset }) => {
  const {
    id,
    explorer,
    marketCapUsd,
    name,
    priceUsd,
    supply,
    symbol,
    volumeUsd24Hr,
    website
  } = asset
  const classes = useStyles()
  const { price } = usePriceDirection(id, priceUsd)

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <summary className={classes.information}>
          <section>
            <Typography variant="h3" className={classes.firstRow}>
              {name} ({symbol})
            </Typography>
            <Typography variant="h5">{Format.currency(price)}</Typography>
          </section>
          <section>
            <div className={classes.firstRow}>
              <Typography variant="button">Market Cap</Typography>
              <Typography variant="h5">
                {Format.bigNumber(marketCapUsd)}
              </Typography>
            </div>
            <Link href={website} color="inherit" target="_blank">
              <Button color="inherit" variant="outlined">
                Website
              </Button>
            </Link>
          </section>
          <section>
            <div className={classes.firstRow}>
              <Typography variant="button">Volume (24h)</Typography>
              <Typography variant="h5">
                {Format.bigNumber(volumeUsd24Hr)}
              </Typography>
            </div>
            <Link href={explorer} color="inherit" target="_blank">
              <Button color="inherit" variant="outlined">
                Explorer
              </Button>
            </Link>
          </section>
          <section>
            <Typography variant="button">Supply</Typography>
            <Typography variant="h5">{Format.bigNumber(supply)}</Typography>
          </section>
        </summary>
      </Container>
    </div>
  )
}

export { AssetSummary }
export { AssetSummaryContent }
