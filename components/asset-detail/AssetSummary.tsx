import {
  Typography,
  Link,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton
} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Format, numberFormatter } from 'services'
import { ICommonRouteParams, IAssetSummary } from 'types'
import { Render } from 'use-react-common'
import { useLivePrice } from 'components'
import { useQuery, COIN_INFORMATION } from 'apollo'

interface IAssetSummaryContent extends ICommonRouteParams {
  summary: IAssetSummary
}

const AssetSummary: React.FC<ICommonRouteParams> = ({ id }) => {
  const { data } = useQuery<IAssetSummary>(COIN_INFORMATION, {
    variables: { id }
  })

  return Render.ensure(
    summary => <AssetSummaryContent id={id} summary={summary} />,
    data
  )
}

const AssetSummaryContent: React.FC<IAssetSummaryContent> = ({
  id,
  summary
}) => {
  const {
    explorer,
    marketCapUsd,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr,
    website
  } = summary.asset
  const { price } = useLivePrice(id, priceUsd)

  return (
    <section>
      <List>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">Rank</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Box fontWeight="fontWeightMedium" component="span">
              {rank}
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">
              {name} ({symbol})
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography>
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(price)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">Market Cap</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography>
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.bigNumber(marketCapUsd)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">Volume (24h)</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography>
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.bigNumber(volumeUsd24Hr)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">Supply</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography>
              <Box fontWeight="fontWeightMedium" component="span">
                {numberFormatter.format(supply)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">Supply</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography>
              <Box fontWeight="fontWeightMedium" component="span">
                {numberFormatter.format(supply)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider light />
      <List>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">Explorer</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Link href={explorer} color="inherit" target="_blank">
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary">Website</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Link href={website} color="inherit" target="_blank">
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </section>
  )
}

export { AssetSummary }
export { AssetSummaryContent }
