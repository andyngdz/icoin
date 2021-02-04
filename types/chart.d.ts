export interface ICalculateInterval {
  id: string

  interval: TInterval

  start: number

  end: number
}

export interface ITime {
  onTimeChange: TOnTimeChange

  time: TTime
}

export type TTime = '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' | 'ALL'

export type TInterval = 'm5' | 'm30' | 'h2' | 'h6' | 'h12' | 'd1'

export type TOnTimeChange = (time: TTime) => void
