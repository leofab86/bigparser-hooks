import * as bp from 'bigparser'
import useSWR, { mutate } from 'swr'

type Config = {
  authId?: string,
  gridId?: string
}

type UseSearchParams<DataModel> = {
  query?: bp.QueryObject<DataModel>['query']
  config?: Config
}

export const useSearch = <DataModel>(params?: UseSearchParams<DataModel>) => {
  const gridId = (params?.config?.gridId || process.env.REACT_APP_BP_GRID_ID) as string
  const authId = params?.config?.authId || process.env.REACT_APP_BP_AUTH

  const { data, error, isLoading } = useSWR<bp.APIResponse>(gridId, () => {
    return bp.search<DataModel>(
      { query: params?.query || {} },
      gridId,
      { authId })
  })

  return { data, error, isLoading }
}

type UseAddColumnParams = {
  config?: Config
}

export const useAddColumn = <DataModel>(params?: UseAddColumnParams) => {
  const gridId = (params?.config?.gridId || process.env.REACT_APP_BP_GRID_ID) as string
  const authId = params?.config?.authId || process.env.REACT_APP_BP_AUTH

  return async function addColumn(addColumnObj: bp.AddColumnObject<DataModel>) {
    const resp = await bp.addColumn<DataModel>(
      addColumnObj,
      gridId,
      { authId }
    )
    mutate(gridId)
    return resp
  }
}