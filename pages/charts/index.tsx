import { Charts } from 'components'
import { NextSeo } from 'next-seo'

const ChartsPage = (): React.ReactElement => {
  return (
    <>
      <NextSeo
        title="Charts - ICoin / Cryptocurrency Market Data"
        description="Real-time cryptocurrency market cap rankings, trading charts, and more."
        openGraph={{
          url: location.href,
          images: [{ url: '/charts.png' }]
        }}
      />
      <Charts />
    </>
  )
}

export default ChartsPage
