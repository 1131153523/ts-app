/// <reference types="react-scripts" />
declare interface IRoute {
    path: string;
    name?: string;
    component: any;
    isIndex?: boolean;
    childRoutes?: IRoute[];
    exact?: boolean;
    autoIndexRoute?: boolean;
}
declare interface IStore {
    store: any;
}
declare namespace Ajax {
    export interface AxiosResponse {
        data: AjaxResponse;
    }
    export interface AjaxResponse {
        code: number;
        data: any;
        message: string;
    }
}
