import { Container } from '@material-ui/core'
import { useRouter } from 'next/router'

const Asset: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Container>
      <div>asdasdasdasdjkhasdjkhasjdhksad</div>
    </Container>
  )
}

export { Asset }
