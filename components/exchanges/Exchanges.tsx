import { useQuery, EXCHANGE } from 'apollo'
import { IExchangeParams, IExchangeResponse } from 'types'

const Exchanges: React.FC = () => {
  useQuery<IExchangeResponse, IExchangeParams>(EXCHANGE, {
    variables: {
      direction: 'ASC',
      first: 20,
      sort: 'rank'
    }
  })

  return <div></div>
}

export { Exchanges }
