import { Chart } from 'services'
import { IAssetHistories, TTime } from 'types'
import { useEffect, useRef } from 'react'

interface ILineChart {
  data: IAssetHistories

  time: TTime
}

/**
 * Render a line chart
 *
 * @param data List of asset history
 *
 * @param time A time is selected from TimeSelection, It's used for detecting time scale on the chart
 */
const LineChart: React.FC<ILineChart> = ({
  time,
  data
}): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>()

  const renderChart = () => {
    const { assetHistories } = data
    Chart.createNewChart(canvasRef.current, time, assetHistories)
  }

  useEffect(() => {
    if (data) renderChart()
  }, [data])

  return <canvas id="icoin-chart" ref={canvasRef} />
}

export { LineChart }
