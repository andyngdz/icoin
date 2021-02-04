import { ChangeEvent } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { INTERVAL } from 'data'
import { IUseInterval, TInterval } from 'types'

const IntervalSelection: React.FC<IUseInterval> = ({
  interval,
  onIntervalChange
}): React.ReactElement => {
  const onChange = (
    event: ChangeEvent<{ name?: string; value: TInterval }>,
    _child: TInterval
  ) => {
    onIntervalChange(event.target.value)
  }

  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="interval">Interval</InputLabel>
      <Select
        value={interval}
        onChange={onChange}
        inputProps={{
          name: 'interval',
          id: 'interval'
        }}
      >
        {INTERVAL.map(value => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export { IntervalSelection }
