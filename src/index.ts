import {search} from 'bigparser'
import {useEffect, useState} from "react";

type Config = {
  authId?: string,
  gridId?: string
}

type Parameters = {
  config?: Config
}

type State<DataModel> = Pick<
  Awaited<ReturnType<typeof search<DataModel>>>,
  'data' | 'error'
>


export const useSearch = <DataModel>(params?: Parameters) => {
  const [state, setState] = useState<State<DataModel>>({ data: undefined, error: undefined })

  useEffect(() => {
    const async = async () => {
      const gridId = (params?.config?.gridId || process.env.REACT_APP_BP_GRID_ID) as string

      const resp = await search<DataModel>({
        query: {},
      }, gridId, {
        authId: params?.config?.authId || process.env.REACT_APP_BP_AUTH
      })
      setState(resp)
    }
    async()
  }, [])

  return { data: state.data, error: state.error }
}