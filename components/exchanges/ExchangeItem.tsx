import { Format } from 'services'
import { INode } from 'types'
import { TableRow, TableCell } from '@material-ui/core'

interface IExchangeItemProps {
  node: INode
}

const ExchangeItem: React.FC<IExchangeItemProps> = ({ node }) => {
  const {
    rank,
    name,
    tradingPairs,
    topPairBaseSymbol,
    topPairQuoteSymbol,
    volumeUsd24Hr,
    percentTotalVolume
  } = node

  return (
    <TableRow>
      <TableCell>{rank}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{tradingPairs}</TableCell>
      <TableCell>
        {topPairBaseSymbol}/{topPairQuoteSymbol}
      </TableCell>
      <TableCell>{Format.currency(volumeUsd24Hr)}</TableCell>
      <TableCell>{Format.percent(percentTotalVolume)}</TableCell>
      <TableCell>Status</TableCell>
    </TableRow>
  )
}

export { ExchangeItem }
