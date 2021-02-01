import { AssetNameAndDescription } from 'components'
import { Format } from 'services'
import { IAsset } from 'types'
import { IRootStore } from 'types'
import { TableRow, TableCell, Typography, makeStyles } from '@material-ui/core'
import { usePrevious } from 'react-use'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

interface IAssetItemProps {
  asset: IAsset
}

const useStyles = makeStyles(
  (theme) => ({
    asset: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
    },

    up: {},

    down: {},

    spacer: {
      height: theme.spacing(2),
    },
  }),
  {
    name: 'AssetItem',
  }
)

const AssetItem: React.FC<IAssetItemProps> = ({ asset }) => {
  const classes = useStyles()
  let {
    changePercent24Hr,
    explorer,
    id,
    marketCapUsd,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr,
  } = asset

  priceUsd =
    useSelector((store: IRootStore) => store.prices.data[id]) || priceUsd

  const prevPriceUsd = usePrevious(priceUsd)

  return (
    <>
      <TableRow
        className={clsx(
          classes.asset,
          prevPriceUsd && {
            [classes.up]: priceUsd > prevPriceUsd,
            [classes.down]: priceUsd < prevPriceUsd,
          }
        )}
      >
        <TableCell>
          <Typography variant="button">{rank}.</Typography>
        </TableCell>
        <TableCell>
          <AssetNameAndDescription
            symbol={symbol}
            name={name}
            explorer={explorer}
          />
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.currency(marketCapUsd)}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">{Format.currency(priceUsd)}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.currency(supply)} {symbol}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.currency(volumeUsd24Hr)}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.percent(changePercent24Hr)}
          </Typography>
        </TableCell>
        <TableCell align="right">Price Graph</TableCell>
      </TableRow>
      <TableRow className={classes.spacer} />
    </>
  )
}

export { AssetItem }
