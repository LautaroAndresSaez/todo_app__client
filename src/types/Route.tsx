
export interface IRoute {
    readonly path: string
    readonly privateRoute: boolean
    readonly exact: boolean
    readonly component: React.FC
    toLink: (name: string) => React.ReactNode
    toRoute: () => React.ReactNode
}

