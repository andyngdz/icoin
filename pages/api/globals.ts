import { NextApiRequest, NextApiResponse } from 'next'
import API from 'pages/api'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await API.getGlobal()

  return res.send(data)
}
