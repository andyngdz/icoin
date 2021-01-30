import { TopBar } from 'components'
import { customRender } from 'services'

describe('TopBar', () => {
  it('Should render correctly', () => {
    const renderer = customRender(<TopBar />)
    expect(renderer).toMatchSnapshot()
  })
})
