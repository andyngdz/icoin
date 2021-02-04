import { Chip, Grid } from '@material-ui/core'
import { INTERVAL } from 'data'
import { IUseInterval } from 'types'

const IntervalSelection: React.FC<IUseInterval> = ({
  interval,
  onIntervalChange
}): React.ReactElement => {
  return (
    <Grid spacing={1} container>
      {INTERVAL.map(value => {
        const isSelected = value === interval

        return (
          <Grid key={value} item>
            <Chip
              color={isSelected ? 'secondary' : 'default'}
              variant="outlined"
              onClick={() => onIntervalChange(value)}
              label={value}
              key={value}
              clickable
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export { IntervalSelection }
