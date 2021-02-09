import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'
import { AssetItem } from 'components'
import { IAsset } from 'types'
import { useSort } from 'use-react-common'

interface IAssetsTableProps {
  data: Array<IAsset>
}

const AssetsTable: React.FC<IAssetsTableProps> = ({ data }) => {
  const { sortedData } = useSort(data, 'priceUsd', {
    direction: 'desc'
  })

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Name and Description</TableCell>
          <TableCell align="right">Market Cap</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Volume</TableCell>
          <TableCell align="right">Change (24h)</TableCell>
          <TableCell align="right">Circularing Supply</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map(asset => (
          <AssetItem key={asset.id} asset={asset} />
        ))}
      </TableBody>
    </Table>
  )
}

export { AssetsTable }
