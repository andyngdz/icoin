import { Pagination as PaginationCore } from '@material-ui/lab'
import { TOnPageChange } from 'types'

interface IPaginationProps {
  count: number

  page: number

  onChangePage: TOnPageChange
}

const Pagination: React.FC<IPaginationProps> = ({
  count,
  page,
  onChangePage
}): React.ReactElement => {
  return (
    <PaginationCore
      count={count}
      page={page}
      onChange={onChangePage}
      variant="outlined"
    />
  )
}

export { Pagination }
