import { Assets } from 'components'
import { NextSeo } from 'next-seo'

const HomePage = (): React.ReactElement => (
  <>
    <NextSeo
      title="ICoin / Cryptocurrency Market Data"
      description="Real-time cryptocurrency market cap rankings, trading charts, and more."
      openGraph={{
        url: location.href,
        images: [{ url: '/main.png' }]
      }}
    />
    <Assets />
  </>
)

export default HomePage
