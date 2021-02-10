import { INode } from 'types'
import { Tooltip, makeStyles } from '@material-ui/core'
import { formatDistance } from 'date-fns'
import clsx from 'clsx'

type TExchangeStatusProps = Pick<INode, 'updatedAt'>

const useStyles = makeStyles(
  theme => ({
    status: {
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      margin: '0 auto',
      borderRadius: '100%'
    },

    available: {
      backgroundColor: theme.palette.success.light
    },

    notAvailable: {
      backgroundColor: theme.palette.error.light
    }
  }),
  {
    name: 'ExchangeStatus'
  }
)

const ExchangeStatus: React.FC<Partial<TExchangeStatusProps>> = ({
  updatedAt
}): React.ReactElement => {
  const classes = useStyles()

  const getTooltipTitle = () => {
    if (updatedAt) {
      return formatDistance(updatedAt, Date.now(), { addSuffix: true })
    }

    return 'Not available'
  }

  return (
    <Tooltip title={getTooltipTitle()} placement="right">
      <div
        className={clsx(classes.status, {
          [classes.available]: !!updatedAt,
          [classes.notAvailable]: !updatedAt
        })}
      />
    </Tooltip>
  )
}

export { ExchangeStatus }
