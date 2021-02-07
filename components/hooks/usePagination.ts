import { TOnPageChange } from 'types'

interface IUsePagination {
  page: number

  onChangePage: TOnPageChange
}

const usePagination = (): IUsePagination => {
  const page = 1

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    console.info(page)
  }

  return { page, onChangePage }
}

export { usePagination }
