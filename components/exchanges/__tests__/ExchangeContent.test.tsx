import { customRender } from 'services/test-utils'
import { ExchangeContent } from 'components'
import { exchanges } from 'mock-data'
import { renderHook } from '@testing-library/react-hooks'
import { useSort } from 'use-react-common'

describe('ExchangeContent', () => {
  it('Should render it correctly', async () => {
    const { result } = renderHook(() =>
      useSort(['rank', 'name'], {
        field: 'rank',
        direction: 'ASC'
      })
    )
    const { sorts, onSort } = result.current

    const renderResult = customRender(
      <ExchangeContent exchanges={exchanges} sorts={sorts} onSort={onSort} />
    )

    expect(renderResult).toMatchSnapshot()
  })
})
