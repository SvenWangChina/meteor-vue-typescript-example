export default interface Methods {
    'DemoColl.methods.listBySearch': (arg: { search: string }) => ListBySearchMethodResult[];
}

export interface ListBySearchMethodResult {
    content: string;
    createdAt: Date;
}
