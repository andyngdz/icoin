import { ICommonRoutePrams } from 'types'
import { TimeSelection, ContainerWrapper } from 'components'
import { useTime } from 'components'
import { Chart } from 'services'

const AssetChart: React.FC<ICommonRoutePrams> = ({
  id
}): React.ReactElement => {
  const { time, onTimeChange } = useTime()
  const data = Chart.calculateInterval(id, time)
  console.info(data)

  return (
    <ContainerWrapper>
      <TimeSelection time={time} onTimeChange={onTimeChange} />
    </ContainerWrapper>
  )
}

export { AssetChart }
