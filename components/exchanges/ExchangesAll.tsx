import { ContainerWrapper, ExchangeContent, useExchange } from 'components'
import { EXCHANGE } from 'apollo'

const ExchangesAll: React.FC = () => {
  const { data } = useExchange(EXCHANGE, {
    first: 20,
    direction: 'ASC',
    sort: 'rank'
  })

  return (
    <ContainerWrapper>
      <ExchangeContent data={data} />
    </ContainerWrapper>
  )
}

export { ExchangesAll }
