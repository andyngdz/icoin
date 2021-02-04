import { ICalculateInterval, TTime } from 'types'
import { TIME_TO_INTERVAL } from 'data'
import { sub } from 'date-fns'

const Chart = {
  calculateInterval: (id: string, time: TTime): ICalculateInterval => {
    let start: number
    const end = Date.now()

    switch (time) {
      case '1D':
        start = sub(end, { days: 1 }).valueOf()
        break
      case '1W':
        start = sub(end, { weeks: 1 }).valueOf()
        break
      case '1M':
        start = sub(end, { months: 1 }).valueOf()
        break
      case '3M':
        start = sub(end, { months: 3 }).valueOf()
        break
      case '6M':
        start = sub(end, { months: 6 }).valueOf()
        break
      case '1Y':
      case 'ALL':
        start = sub(end, { years: 1 }).valueOf()
        break
    }

    return {
      id,
      interval: TIME_TO_INTERVAL[time],
      start,
      end
    }
  }
}

export { Chart }
