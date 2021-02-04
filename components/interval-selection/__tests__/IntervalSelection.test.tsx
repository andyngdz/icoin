import { customRender } from 'services/test-utils'
import { IntervalSelection } from 'components'

describe('IntervalSelection', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <IntervalSelection interval="1D" onIntervalChange={jest.fn()} />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
