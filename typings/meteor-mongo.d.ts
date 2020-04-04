/**
 * collection insert时提示，每个属性都是可选的
 */
declare type CollOptional<T> = {
    [P in keyof T]?: T[P];
};

declare interface CollFindOptions {
    sort?: Mongo.SortSpecifier;
    skip?: number;
    limit?: number;
    fields?: Mongo.FieldSpecifier;
    reactive?: boolean;
    transform?: Function | null;
}
