import axios from 'axios'
import { IAPI } from 'types/api'

const CoingeckoAPI = axios.create({
  baseURL: process.env.COINGECKO_API,
})

const API: IAPI = {
  getGlobal: () => CoingeckoAPI.get('/global'),
}

export default API
