import { render } from 'services/test-utils'
import { TopBar } from 'components/top-bar/TopBar'

describe('TopBar', () => {
  it('Should render correctly', () => {
    const renderer = render(<TopBar />)
    expect(renderer).toMatchSnapshot()
  })
})
