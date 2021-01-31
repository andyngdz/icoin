import { API, Format } from 'services'
import {
  makeStyles,
  Typography,
  AppBar,
  Grow,
  Toolbar,
} from '@material-ui/core'
import { useAsync } from 'react-use'
import { IGlobal } from 'types/global'
import { AxiosResponse } from 'axios'

interface ITopBarContentProps {
  value: AxiosResponse<IGlobal>
}

const useStyles = makeStyles(
  (theme) => ({
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      flex: 1,
    },

    info: {
      '& > span': {
        paddingRight: theme.spacing(2),
        fontWeight: theme.typography.button.fontWeight,
      },
    },
  }),
  {
    name: 'TopBarContent',
  }
)

const TopBarContent: React.FC<ITopBarContentProps> = ({ value }) => {
  const classes = useStyles()
  const { data } = value.data

  return (
    <div className={classes.content}>
      <div className={classes.info}>
        <Typography variant="subtitle2" component="span">
          Cryptocurrencies:&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">
            {data.active_cryptocurrencies}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" component="span">
          Markets:&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">
            {data.markets}
          </Typography>
        </Typography>
      </div>
      <div className={classes.info}>
        <Typography variant="subtitle2" component="span">
          Market Cap:&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">
            {Format.currency(data.total_market_cap.usd)}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" component="span">
          24h Volume:&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">
            {Format.currency(data.total_volume.usd)}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" component="span">
          Dominance:&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">
            BTC {data.market_cap_percentage.btc.toFixed(2)}%
          </Typography>
        </Typography>
        <Typography variant="subtitle2" component="span" color="primary">
          ETH {data.market_cap_percentage.eth.toFixed(2)}%
        </Typography>
      </div>
    </div>
  )
}

const TopBar = () => {
  const { loading, value } = useAsync(API.getGlobals)

  return (
    <AppBar position="relative" color="default" variant="outlined">
      <Toolbar>
        {!loading && (
          <Grow in>
            <TopBarContent value={value} />
          </Grow>
        )}
      </Toolbar>
    </AppBar>
  )
}

export { TopBar }
