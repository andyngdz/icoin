import { Exchanges } from 'components'
import { NextSeo } from 'next-seo'

const ExchangesPage = (): React.ReactElement => {
  return (
    <>
      <NextSeo
        title="Exchanges - ICoin / Cryptocurrency Market Data"
        description="Real-time cryptocurrency market cap rankings, trading charts, and more."
        openGraph={{
          url: location.href,
          images: [{ url: '/charts.png' }]
        }}
      />
      <Exchanges />
    </>
  )
}

export default ExchangesPage
