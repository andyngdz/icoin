import { TOnPageChange } from 'types'

interface IUsePagination {
  count: number

  page: number

  onChangePage: TOnPageChange
}

const usePagination = (): IUsePagination => {
  const count = 100
  const page = 1

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    console.info(page)
  }

  return { count, page, onChangePage }
}

export { usePagination }
