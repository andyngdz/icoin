import { IAsset } from 'types'
import { Typography } from '@material-ui/core'

export type TAssetProps = Pick<IAsset, 'rank'>

const AssetRanking: React.FC<TAssetProps> = ({ rank }) => {
  return (
    <div>
      <Typography>{rank}</Typography>
    </div>
  )
}

export { AssetRanking }
