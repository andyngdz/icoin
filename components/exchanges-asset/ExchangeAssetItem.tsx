import { ExchangeStatus } from 'components'
import { Format } from 'services'
import { IAssetNode } from 'types'
import { TableRow, TableCell } from '@material-ui/core'

interface IExchangeAssetItemProps {
  node: IAssetNode
}

const ExchangeAssetItem: React.FC<IExchangeAssetItemProps> = ({ node }) => {
  const {
    exchangeName,
    baseSymbol,
    quoteSymbol,
    priceUsd,
    volumeUsd24Hr,
    percentVolume,
    updatedAt
  } = node

  return (
    <TableRow>
      <TableCell>{exchangeName}</TableCell>
      <TableCell>
        {baseSymbol}/{quoteSymbol}
      </TableCell>
      <TableCell align="right">{Format.currency(priceUsd)}</TableCell>
      <TableCell align="right">{Format.currency(volumeUsd24Hr)}</TableCell>
      <TableCell align="right">{Format.percent(percentVolume)}</TableCell>
      <TableCell align="center">
        <ExchangeStatus updatedAt={updatedAt} />
      </TableCell>
    </TableRow>
  )
}

export { ExchangeAssetItem }
