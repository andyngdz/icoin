import { ExchangeItem } from 'components'
import { IExchanges, IEdgeNode, INode } from 'types'
import { IUseSort } from 'use-react-common'
import { Sort } from 'services'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core'

interface IExchangeContentProps extends Omit<IUseSort, 'current'> {
  exchanges: IExchanges<IEdgeNode<INode>>
}

const ExchangeContent: React.FC<IExchangeContentProps> = ({
  exchanges,
  sorts,
  onSort
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sorts?.rank.active}
                direction={Sort.toMaterialDirection(sorts?.rank.direction)}
                onClick={() => onSort('rank')}
              >
                Rank
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sorts?.name.active}
                direction={Sort.toMaterialDirection(sorts?.name.direction)}
                onClick={() => onSort('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Top Pair </TableCell>
            <TableCell align="right">
              <TableSortLabel>Trading Pairs</TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel>Volume (24H)</TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel>Total (%)</TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel>Status</TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchanges.edges.map(edgeNode => {
            const { node } = edgeNode

            return <ExchangeItem key={node.id} node={node} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ExchangeContent }
