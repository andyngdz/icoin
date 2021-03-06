import { DURATION } from 'data'
import { throttle } from 'lodash'
import { updatePrice } from 'states/prices'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useLivePrices = (): void => {
  const dispatch = useDispatch()

  const priceUpdate = throttle((msg: MessageEvent) => {
    const dataObject = JSON.parse(msg.data)
    dispatch(updatePrice(dataObject))
  }, DURATION * 2)

  const liveUpdate = () => {
    const priceWs = new WebSocket(process.env.NEXT_PUBLIC_COINCAP_WEBSOCKET_ALL)

    priceWs.onmessage = (msg: MessageEvent) => priceUpdate(msg)
  }

  useEffect(() => {
    liveUpdate()

    return () => priceUpdate.cancel()
  }, [])
}

export { useLivePrices }
