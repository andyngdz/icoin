import { ContainerWrapper, ExchangeContent } from 'components'
import { EXCHANGE, useQuery } from 'apollo'
import { IExchangeResponse, IExchangeParams } from 'types'
import { Render, useSort } from 'use-react-common'

const Exchanges: React.FC = () => {
  const { current, sorts, onSort } = useSort(['rank', 'name'], {
    field: 'rank',
    direction: 'ASC'
  })

  const { data } = useQuery<IExchangeResponse, IExchangeParams>(EXCHANGE, {
    variables: {
      first: 20,
      sort: current.field,
      direction: current.direction
    }
  })

  return Render.ensure(readyData => {
    return (
      <ContainerWrapper>
        <ExchangeContent
          exchanges={readyData.exchanges}
          sorts={sorts}
          onSort={onSort}
        />
      </ContainerWrapper>
    )
  }, data)
}

export { Exchanges }
