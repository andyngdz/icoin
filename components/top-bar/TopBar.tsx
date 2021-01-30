import { useAsync } from 'react-use'
import { makeStyles, Typography } from '@material-ui/core'
import API from 'services/api'

const useStyles = makeStyles(
  (theme) => ({
    topbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    info: {
      '& > span': {
        paddingRight: theme.spacing(2),
        fontWeight: theme.typography.button.fontWeight,
      },
    },
  }),
  {
    name: 'TopBar',
  }
)

const TopBar = () => {
  const classes = useStyles()
  const { loading, value } = useAsync(API.getGlobal)

  if (!loading) {
    const { data } = value.data

    return (
      <div className={classes.topbar}>
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
              {data.total_market_cap.usd}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="span">
            24H Volume:&nbsp;
            <Typography variant="subtitle2" component="span" color="primary">
              {data.market_cap_change_percentage_24h_usd}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="span">
            BTC Dominance:&nbsp;
            <Typography variant="subtitle2" component="span" color="primary">
              {data.market_cap_percentage.btc}
            </Typography>
          </Typography>
        </div>
      </div>
    )
  }

  return <></>
}

export { TopBar }
