import { CDN } from 'services'
import { IAsset } from 'types'
import { Img } from 'react-image'
import { Typography, makeStyles } from '@material-ui/core'

interface IAssetNameAndDescriptionProps
  extends Pick<IAsset, 'symbol' | 'name' | 'explorer'> {}

const useStyles = makeStyles(
  (theme) => ({
    name: {
      display: 'flex',
      alignItems: 'center',

      '& > img': {
        paddingRight: theme.spacing(),
        height: theme.spacing(3.5),
      },
    },
  }),
  {
    name: 'AssetNameAndDescription',
  }
)

const AssetNameAndDescription: React.FC<IAssetNameAndDescriptionProps> = ({
  symbol,
  name,
  explorer,
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.name}>
        <Img
          src={[CDN.getIcon(symbol.toLowerCase()), CDN.defaultIcon]}
          alt={name}
        />
        <Typography variant="h6">{name}</Typography>
      </div>
    </div>
  )
}

export { AssetNameAndDescription }
