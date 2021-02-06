import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import {
  AssetItem,
  ContainerWrapper,
  Pagination,
  usePagination
} from 'components'
import { useAsync } from 'react-use'
import { API } from 'services'

const Assets = (): React.ReactElement => {
  const { loading, value } = useAsync(API.getAssets)
  const { count, page, onChangePage } = usePagination()

  if (!loading) {
    const { data } = value.data

    return (
      <ContainerWrapper>
        <TableContainer component={Paper}>
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
              {data.map(asset => (
                <AssetItem key={asset.id} asset={asset} />
              ))}
            </TableBody>
          </Table>
          <Pagination count={count} page={page} onChangePage={onChangePage} />
        </TableContainer>
      </ContainerWrapper>
    )
  }

  return <></>
}

export { Assets }
