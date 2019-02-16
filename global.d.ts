declare interface IRoute {
    path: string,
    name?: string,
    component: any,
    isIndex?: boolean,
    childRoutes?: IRoute[],
    exact?:boolean,
    autoIndexRoute?: boolean
}
declare interface IStore {
    store: any
}