import { ButtonGroup, Button } from '@material-ui/core'

const IntervalSelection = (): React.ReactElement => {
  return (
    <ButtonGroup color="primary">
      <Button>1D</Button>
      <Button>1W</Button>
      <Button>1M</Button>
      <Button>3M</Button>
      <Button>6M</Button>
      <Button>1Y</Button>
      <Button>ALL</Button>
    </ButtonGroup>
  )
}

export { IntervalSelection }
