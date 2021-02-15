import { ExchangeContent } from 'components'
import { IExchangeAssetParams, IExchangeResponse } from 'types'
import { useQuery, EXCHANGE } from 'apollo'

interface IExchangesAssetProps {
  assetId: string
}

const ExchangesAsset: React.FC<IExchangesAssetProps> = ({ assetId }) => {
  const { data } = useQuery<IExchangeResponse, IExchangeAssetParams>(EXCHANGE, {
    variables: {
      assetId,
      direction: 'ASC',
      first: 20,
      sort: 'rank'
    }
  })

  return <ExchangeContent data={data} />
}

export { ExchangesAsset }
