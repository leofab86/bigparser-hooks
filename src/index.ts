import * as bigParser from 'bigparser'

declare type GridDataModel = {
  Country: string;
  Airport: string;
  Airlines: string;
  NumPlanes: number;
  HasLounge: boolean;
}

export const useSearch = async () => {
  console.log('starting search', bigParser)
  const { data: searchData, error: searchError } = await bigParser.search<GridDataModel>({
    query: {}
  }, '')
  console.log({ searchData, searchError })
}