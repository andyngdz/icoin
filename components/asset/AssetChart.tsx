import { IntervalSelection, ContainerWrapper } from 'components'
import { useInterval } from 'components'

const AssetChart = (): React.ReactElement => {
  const { interval, onIntervalChange } = useInterval()

  console.info(interval)

  return (
    <ContainerWrapper>
      <IntervalSelection
        interval={interval}
        onIntervalChange={onIntervalChange}
      />
    </ContainerWrapper>
  )
}

export { AssetChart }
