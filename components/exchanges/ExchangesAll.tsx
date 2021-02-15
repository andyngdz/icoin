import { ContainerWrapper, ExchangeContent } from 'components'
import { IExchangeParams, IExchangeResponse } from 'types'
import { useQuery, EXCHANGE } from 'apollo'

const ExchangesAll: React.FC = () => {
  const { data } = useQuery<IExchangeResponse, IExchangeParams>(EXCHANGE, {
    variables: {
      direction: 'ASC',
      first: 20,
      sort: 'rank'
    }
  })

  return (
    <ContainerWrapper>
      <ExchangeContent data={data} />
    </ContainerWrapper>
  )
}

export { ExchangesAll }
