import { AssetsTable } from 'components'
import { act, customRender, RenderResult } from 'services/test-utils'

describe('Assets', () => {
  it('Should render assets table correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(
        <AssetsTable active_cryptocurrencies={6000} />
      )
    })

    expect(renderResult).toMatchSnapshot()
  })
})
