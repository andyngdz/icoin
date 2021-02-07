export type TOnPageChange = (
  event: React.MouseEvent<HTMLButtonElement>,
  page: number
) => void

export interface IPagination {
  page: number
}
