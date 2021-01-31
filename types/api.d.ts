import { AxiosResponse } from 'axios'
import { IGlobal } from 'types/global'
import { IAssetParams } from 'types/assets'

export interface IAPI {
  getGlobals: () => Promise<AxiosResponse<IGlobal>>

  getAssets: (params?: IAssetParams) => Promise<AxiosResponse>
}
