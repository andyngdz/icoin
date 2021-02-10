import { INode } from 'types'
import { makeStyles } from '@material-ui/core'
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

const ExchangeStatus: React.FC<TExchangeStatusProps> = ({
  updatedAt
}): React.ReactElement => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.status, {
        [classes.available]: !!updatedAt,
        [classes.notAvailable]: !updatedAt
      })}
    />
  )
}

export { ExchangeStatus }
