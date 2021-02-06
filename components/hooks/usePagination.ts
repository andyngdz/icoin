import { useState } from 'react'
import { TOnPageChange } from 'types'

interface IUsePagination {
  rowsPerPage: number

  count: number

  page: number

  onChangePage: TOnPageChange
}

const usePagination = (): IUsePagination => {
  const [rowsPerPage] = useState(100)
  const count = 6000
  const page = 1

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    console.info(page)
  }

  return { rowsPerPage, count, page, onChangePage }
}

export { usePagination }
