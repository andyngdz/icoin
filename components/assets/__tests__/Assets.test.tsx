import { asset } from 'mock-data'
import { Assets } from 'components'
import { act, customRender, RenderResult } from 'services/test-utils'
import { Table, TableBody } from '@material-ui/core'

describe('Assets', () => {
  it('Should render it correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(<Assets />)
    })

    expect(renderResult).toMatchSnapshot()
  })
})
