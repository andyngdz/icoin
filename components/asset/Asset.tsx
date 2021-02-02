import { Container } from '@material-ui/core'
import { useQuery, COIN_INFORMATION } from 'apollo'
import { useRouter } from 'next/router'

const Asset: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  useQuery(COIN_INFORMATION, {
    variables: { id }
  })

  return (
    <Container>
      <div>asdasdasdasdjkhasdjkhasjdhksad</div>
    </Container>
  )
}

export { Asset }
