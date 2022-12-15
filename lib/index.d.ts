type Config = {
    authId?: string;
    gridId?: string;
};
type Parameters = {
    config?: Config;
};
export declare const useSearch: <DataModel>(params?: Parameters) => {
    data: any;
    error: void | import("axios").AxiosError<unknown, any>;
};
export {};
