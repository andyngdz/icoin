import { IExchangeResponse, IExchangeParams, IExchangeAssetParams } from 'types'
import { DocumentNode, useQuery, QueryResult } from 'apollo'

const useExchange = (
  node: DocumentNode,
  variables: IExchangeParams | IExchangeAssetParams
): QueryResult<IExchangeResponse> => {
  const result = useQuery<
    IExchangeResponse,
    IExchangeParams | IExchangeAssetParams
  >(node, {
    variables
  })

  return result
}

export { useExchange }
