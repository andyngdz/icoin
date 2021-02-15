import { ExchangeItem } from 'components'
import { IExchangeResponse } from 'types'
import { Render } from 'use-react-common'
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

interface IExchangeContentProps {
  data: IExchangeResponse
}

const ExchangeContent: React.FC<IExchangeContentProps> = ({ data }) => {
  return Render.ensure(readyData => {
    const { exchanges } = readyData

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Top Pair</TableCell>
              <TableCell align="right">Trading Pairs</TableCell>
              <TableCell align="right">Volume (24h)</TableCell>
              <TableCell align="right">Total (%)</TableCell>
              <TableCell align="center">Status</TableCell>
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
  }, data)
}

export { ExchangeContent }
