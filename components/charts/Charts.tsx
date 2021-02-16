import { makeStyles, Paper } from '@material-ui/core'
import { useEffect } from 'react'
import { useTheme, ContainerWrapper } from 'components'

const useStyles = makeStyles(
  () => ({
    container: {
      height: '75vh'
    }
  }),
  {
    name: 'Charts'
  }
)

const Charts = (): React.ReactElement => {
  const classes = useStyles()
  const theme = useTheme()

  useEffect(() => {
    const charts = new TradingView.widget({
      container_id: 'charts',
      symbol: 'BITBAY:BTCUSD',
      interval: 'D',
      timezone: 'exchange',
      theme: 'light',
      style: '1',
      locale: 'en',
      toolbar_bg: theme.palette.background.paper,
      enable_publishing: false,
      allow_symbol_change: true,
      autosize: true
    })

    return () => charts.remove()
  }, [])

  return (
    <ContainerWrapper>
      <Paper>
        <div id="charts" className={classes.container} />
      </Paper>
    </ContainerWrapper>
  )
}

export { Charts }
