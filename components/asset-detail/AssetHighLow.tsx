import {
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core'
import { IAssetHistory } from 'types'
import { Price, Format } from 'services'
import { Render } from 'use-react-common'
import { SymbolIcon, ValueColor } from 'components'

interface IAssetHighLowProps {
  data: IAssetHistory
}

const useStyles = makeStyles(
  theme => ({
    icon: {
      width: theme.spacing(6)
    }
  }),
  {
    name: 'AssetHighLow'
  }
)

const AssetHighLow: React.FC<IAssetHighLowProps> = ({
  data
}): React.ReactElement => {
  const classes = useStyles()

  return Render.ensure(readyData => {
    const { asset, assetHistories } = readyData
    const convertedAssetHistories = Format.toNumber(assetHistories, [
      'priceUsd'
    ])
    const { name, symbol, changePercent24Hr } = asset
    const high = Price.max(convertedAssetHistories)
    const low = Price.min(convertedAssetHistories)
    const average = (high + low) / 2

    return (
      <List>
        <ListItem>
          <SymbolIcon
            type="black"
            name={name}
            symbol={symbol}
            className={classes.icon}
          />
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography component="span" color="textSecondary">
              High
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography component="span">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(high)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography component="span" color="textSecondary">
              Low
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography component="span">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(low)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography component="span" color="textSecondary">
              Average
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography component="span">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(average)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography component="span" color="textSecondary">
              Change
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <ValueColor value={changePercent24Hr}>
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.percent(changePercent24Hr)}
              </Box>
            </ValueColor>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    )
  }, data)
}

export { AssetHighLow }
