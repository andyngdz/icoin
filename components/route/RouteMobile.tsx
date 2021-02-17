import {
  Typography,
  ListItem,
  ListItemText,
  LinkProps
} from '@material-ui/core'
import { MouseEvent } from 'react'
import { useChangeRoute } from 'components/hooks'

interface IRouteMobileProps extends LinkProps {
  onAfterPush: VoidFunction
}

const RouteMobile: React.FC<IRouteMobileProps> = ({
  title,
  href,
  onAfterPush
}) => {
  const { onPush, router } = useChangeRoute()
  const isRouted = href === router.route

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    onPush(href)

    if (onAfterPush) onAfterPush()
  }

  return (
    <ListItem onClick={onClick} selected={isRouted} button>
      <ListItemText
        primary={<Typography variant="subtitle2">{title}</Typography>}
      />
    </ListItem>
  )
}

export { RouteMobile }
