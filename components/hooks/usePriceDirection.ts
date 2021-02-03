import { DURATION } from 'data'
import { IRootStore } from 'types'
import { PriceDirection } from 'services'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const usePriceDirection = (id: string, initPrice: number) => {
  const [direction, setDirection] = useState(PriceDirection.VOID)
  const [price, setPrice] = useState(initPrice)
  const prices = useSelector((store: IRootStore) => store.prices.data)
  const livePrice = prices[id]

  useEffect(() => {
    if (livePrice && livePrice !== price) {
      setDirection(livePrice > price ? PriceDirection.UP : PriceDirection.DOWN)
      setPrice(livePrice)
    }

    const clearDirectionTimeoutId = setTimeout(
      () => setDirection(PriceDirection.VOID),
      DURATION
    )

    return () => clearTimeout(clearDirectionTimeoutId)
  }, [livePrice, price])

  return { direction, price }
}

export { usePriceDirection }
