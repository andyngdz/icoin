import { useState } from 'react'
import { IUseInterval, TInterval } from 'types'

const useInterval = (initialInterval: TInterval = '1D'): IUseInterval => {
  const [interval, setInterval] = useState(initialInterval)

  const onIntervalChange = (interval: TInterval) => setInterval(interval)

  return { interval, onIntervalChange }
}

export { useInterval }
