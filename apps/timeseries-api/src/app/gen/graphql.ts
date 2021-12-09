
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class TimeLog {
    id?: Nullable<string>;
}

export abstract class IQuery {
    abstract timeLog(id: string): Nullable<TimeLog> | Promise<Nullable<TimeLog>>;
}

type Nullable<T> = T | null;
