import { ExchangesAll } from 'components'
import Head from 'next/head'

const ExchangesPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Exchanges</title>
      </Head>
      <ExchangesAll />
    </>
  )
}

export default ExchangesPage
