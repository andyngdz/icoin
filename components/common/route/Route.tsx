import { Link, Button, Typography, LinkProps } from '@material-ui/core'
import { MouseEvent } from 'react'
import { useRouter } from 'next/router'

const Route: React.FC<LinkProps> = ({ title, href, ...restProps }) => {
  const router = useRouter()
  const isRouted = href === router.route

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    router.push(href)
  }

  return (
    <Link onClick={onClick} color="inherit" href={href} {...restProps}>
      <Button color={isRouted ? 'primary' : 'default'} size="large">
        <Typography variant="subtitle2">{title}</Typography>
      </Button>
    </Link>
  )
}

export { Route }
