import { IAsset } from 'types'

export interface ISearchNode {
  node: Pick<IAsset, 'id' | 'symbol' | 'name'>
}

export interface ISearchAssets {
  edges: Array<ISearchNode>
}

export interface ISearchResponse {
  assets: ISearchAssets
}
