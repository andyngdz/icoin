import { teal } from '@material-ui/core/colors'

const StyleUtils = {
  createLinearGradient: (canvas: HTMLCanvasElement): CanvasGradient => {
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(1, teal[300])

    return gradient
  }
}

export { StyleUtils }
