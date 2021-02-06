import { TablePagination } from '@material-ui/core'
import { TOnPageChange } from 'types'

interface IPaginationProps {
  count: number

  page: number

  rowsPerPage?: number

  onChangePage: TOnPageChange
}

const Pagination: React.FC<IPaginationProps> = ({
  count,
  page,
  onChangePage,
  rowsPerPage = 100
}): React.ReactElement => {
  return (
    <TablePagination
      component="div"
      count={count}
      onChangePage={onChangePage}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[25, 50, 75, 100, { label: 'All', value: -1 }]}
    />
  )
}

export { Pagination }
