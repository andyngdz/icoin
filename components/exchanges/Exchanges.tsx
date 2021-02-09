import { useQuery, EXCHANGE } from 'apollo'

const Exchanges: React.FC = () => {
  useQuery(EXCHANGE, {
    variables: {
      direction: 'ASC',
      first: 20,
      sort: 'rank'
    }
  })

  return <div></div>
}

export { Exchanges }
