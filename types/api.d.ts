import { AxiosResponse } from 'axios'
import { IGlobal } from 'types/global'

export interface IAPI {
  getGlobal: () => Promise<AxiosResponse<IGlobal>>
}
