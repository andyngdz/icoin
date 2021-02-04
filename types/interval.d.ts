export interface IUseInterval {
  onIntervalChange: TOnIntervalChange

  interval: TInterval
}

export type TInterval = '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' | 'ALL'

export type TOnIntervalChange = (interval: TInterval) => void
