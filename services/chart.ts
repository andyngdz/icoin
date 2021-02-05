/**
 * Author: Andy D. Ng <itc.anhduy@gmail.com>
 * Chart.js contains the useful function to manage a Chart
 */

import { ChartData, ChartOptions, TimeScale } from 'chart.js'
import { fade } from '@material-ui/core'
import { IAssetHistory, ICalculateInterval, TTime } from 'types'
import { merge } from 'lodash'
import { sub } from 'date-fns'
import { Theme } from 'styles'
import { TIME_TO_INTERVAL } from 'data'
import ChartJS from 'chart.js'

/**
 * @description
 * We are using Inter font
 * Set it here for the ChartJS as well
 */
ChartJS.defaults.global.defaultFontFamily = "'Inter', sans-serif"

const Chart = {
  /**
   * @description Calculate interval post data by id, time, start and end date
   *
   * @param id The id of coin such as: bitcoin, ethereum
   *
   * @param time The time from the TimeSelection component - (Check TTime in chart.d.ts)
   *
   * @returns `ICalculateInterval`
   *
   * @example
   * ```
   *    const { time, onTimeChange } = useTime()
   *     const [getIntervals, { data }] = useLazyQuery<IAssetHistories>(COIN_CHART)
   *
   *     useEffect(() => {
   *       const interval = Chart.calculateInterval(id, time)
   *       getIntervals({ variables: interval })
   *     }, [time])
   *```
   */
  calculateInterval: (id: string, time: TTime): ICalculateInterval => {
    let subtractDate: Date
    const end = Date.now()

    switch (time) {
      case '1D':
        subtractDate = sub(end, { days: 1 })
        break
      case '1W':
        subtractDate = sub(end, { weeks: 1 })
        break
      case '1M':
        subtractDate = sub(end, { months: 1 })
        break
      case '3M':
        subtractDate = sub(end, { months: 3 })
        break
      case '6M':
        subtractDate = sub(end, { months: 6 })
        break
      case '1Y':
      case 'ALL':
        subtractDate = sub(end, { years: 1 })
        break
    }

    return {
      end,
      id,
      interval: TIME_TO_INTERVAL[time],
      start: subtractDate.valueOf()
    }
  },

  /**
   * @description Create time scale with unit for Line Chart
   *
   * @param time The time from the TimeSelection component - (Check TTime in chart.d.ts)
   *
   * @returns `TimeScale`
   */
  createTimeScale: (time: TTime): TimeScale => {
    const timeScale: TimeScale = {}

    switch (time) {
      case '1D':
        timeScale.unit = 'hour'
        break
      case '1W':
        timeScale.unit = 'day'
        break
      case '1M':
      case '3M':
        timeScale.unit = 'week'
        break
      case '6M':
      case '1Y':
      case 'ALL':
        timeScale.unit = 'month'
        break
    }

    return timeScale
  },

  /**
   * @description Create a new chart
   *
   * @param ctx The canvas rendering context
   *
   * @param assetHistories Contains the list history data such as: timestamp, priceUsd, etc...
   *
   * @param options The chart options, it will be merged with the default options
   *
   * @returns `ChartJS`
   */
  createNewChart: (
    canvas: HTMLCanvasElement,
    time: TTime,
    assetHistories: IAssetHistory[],
    options?: ChartOptions
  ): ChartJS => {
    const ctx = canvas.getContext('2d')
    const chartData = Chart.createChartData(assetHistories)
    const chartDataStyling = merge(chartData, {
      datasets: [
        {
          backgroundColor: fade(Theme.palette.primary.main, 0.5),
          borderColor: Theme.palette.primary.main,
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 4,
          pointRadius: 0,
          pointHitRadius: 8,
          lineTension: 0.4
        }
      ]
    })

    return new ChartJS(ctx, {
      type: 'line',
      data: chartDataStyling,
      options: merge(
        {
          tooltips: {
            position: 'nearest',
            displayColors: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                time: Chart.createTimeScale(time),
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                position: 'right',
                gridLines: {
                  drawBorder: false
                }
              }
            ]
          }
        },
        options
      )
    })
  },

  /**
   * @description Create chart data
   *
   * @param assetHistories Contains the list history data such as: timestamp, priceUsd, etc...
   *
   * @returns `ChartData`
   */
  createChartData: (assetHistories: Array<IAssetHistory>): ChartData => {
    const data = assetHistories.map(({ timestamp, priceUsd }) => ({
      t: timestamp,
      y: priceUsd
    }))

    const chartData: ChartData = {
      datasets: [
        {
          data
        }
      ]
    }

    return chartData
  }
}

export { Chart }
