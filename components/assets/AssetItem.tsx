import { AssetNameAndDescription, usePriceDirection } from 'components'
import { Format, PriceDirection } from 'services'
import { IAsset } from 'types'
import {
  TableRow,
  TableCell,
  Typography,
  makeStyles,
  fade,
} from '@material-ui/core'
import clsx from 'clsx'

interface IAssetItemProps {
  asset: IAsset
}

const useStyles = makeStyles(
  (theme) => ({
    asset: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.shortest,
      }),
    },

    up: {
      backgroundColor: fade(theme.palette.success.light, 0.15),
    },

    down: {
      backgroundColor: fade(theme.palette.error.light, 0.15),
    },

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
  const {
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
  const { price, direction } = usePriceDirection(id, priceUsd)

  return (
    <>
      <TableRow
        className={clsx(classes.asset, {
          [classes.up]: direction === PriceDirection.UP,
          [classes.down]: direction === PriceDirection.DOWN,
        })}
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
          <Typography variant="button">{Format.currency(price)}</Typography>
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
