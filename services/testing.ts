import { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { Testing } from 'components'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => {
  return render(ui, { wrapper: Testing, ...options })
}

export { customRender }
