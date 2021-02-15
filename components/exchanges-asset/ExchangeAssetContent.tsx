import { ExchangeAssetItem } from 'components'
import { IExchanges, IEdgeNode, IAssetNode } from 'types'
import { IUseSort } from 'use-react-common'
import { Sort } from 'services'
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableSortLabel,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

interface IExchangeContentProps extends Omit<IUseSort, 'current'> {
  assetMarkets: IExchanges<IEdgeNode<IAssetNode>>
}

const ExchangeAssetContent: React.FC<IExchangeContentProps> = ({
  assetMarkets,
  sorts,
  onSort
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Exchange</TableCell>
            <TableCell>Pair</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={sorts?.volumeUsd24Hr.active}
                direction={Sort.toMaterialDirection(
                  sorts?.volumeUsd24Hr.direction
                )}
                onClick={() => onSort('volumeUsd24Hr')}
              >
                Volume (24H)
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">Volume (%)</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assetMarkets.edges.map(edgeNode => {
            const { node } = edgeNode

            return <ExchangeAssetItem key={node.id} assetNode={node} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ExchangeAssetContent }
