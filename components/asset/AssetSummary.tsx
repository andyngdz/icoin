import { Container } from '@material-ui/core'
import { useQuery, COIN_INFORMATION } from 'apollo'
import { IAssetSummary } from 'types'

interface IAssetSummaryProps {
  id: string
}

const AssetSummary: React.FC<IAssetSummaryProps> = ({ id }) => {
  useQuery<IAssetSummary>(COIN_INFORMATION, {
    variables: { id }
  })

  return (
    <Container>
      <div></div>
    </Container>
  )
}

export { AssetSummary }
