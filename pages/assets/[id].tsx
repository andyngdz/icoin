import { AssetDetail } from 'components'
import { capitalize } from 'lodash'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const AsssetPage = (): React.ReactElement => {
  const router = useRouter()
  const { id } = router.query

  if (id) {
    return (
      <>
        <NextSeo
          title={`${capitalize(
            id as string
          )} - ICoin / Cryptocurrency Market Data`}
          description="Real-time cryptocurrency market cap rankings, trading charts, and more."
          openGraph={{
            url: router.pathname,
            images: [{ url: '/assets.png' }]
          }}
        />
        <AssetDetail />
      </>
    )
  }

  return <></>
}

export default AsssetPage
