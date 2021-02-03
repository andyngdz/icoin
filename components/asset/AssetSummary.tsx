import { Container, LinearProgress } from '@material-ui/core'
import { IAssetSummary } from 'types'
import { SymbolIcon } from 'components'
import { useQuery, COIN_INFORMATION } from 'apollo'

interface IAssetSummaryProps {
  id: string
}

const AssetSummary: React.FC<IAssetSummaryProps> = ({ id }) => {
  const { loading, data } = useQuery<IAssetSummary>(COIN_INFORMATION, {
    variables: { id }
  })

  if (loading) {
    return <LinearProgress />
  }

  const { name, symbol } = data.asset

  return (
    <Container>
      <div>
        <SymbolIcon name={name} symbol={symbol} />
      </div>
    </Container>
  )
}

export { AssetSummary }
