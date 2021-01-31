import { useAsync } from 'react-use'
import { API } from 'services'

const Assets = () => {
  const { value } = useAsync(API.getAssets)

  console.info(value)

  return <div />
}

export { Assets }
