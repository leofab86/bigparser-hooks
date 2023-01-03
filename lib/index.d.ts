import * as bp from 'bigparser';
type Config = {
    authId?: string;
    gridId?: string;
};
type UseSearchParams<DataModel> = {
    query?: bp.QueryObject<DataModel>['query'];
    config?: Config;
};
export declare const useSearch: <DataModel>(params?: UseSearchParams<DataModel> | undefined) => {
    data: bp.APIResponse | undefined;
    error: any;
    isLoading: boolean;
};
type UseAddColumnParams = {
    config?: Config;
};
export declare const useAddColumn: <DataModel>(params?: UseAddColumnParams) => (addColumnObj: bp.AddColumnObject<DataModel>) => Promise<bp.APIResponse>;
export {};
