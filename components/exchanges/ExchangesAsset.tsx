import { EXCHANGE_ASSET } from 'apollo'
import { ExchangeContent, useExchange } from 'components'

interface IExchangesAssetProps {
  assetId: string
}

const ExchangesAsset: React.FC<IExchangesAssetProps> = ({ assetId }) => {
  const { data } = useExchange(EXCHANGE_ASSET, {
    assetId,
    first: 20,
    direction: 'ASC',
    sort: 'rank'
  })

  return <ExchangeContent data={data} />
}

export { ExchangesAsset }
