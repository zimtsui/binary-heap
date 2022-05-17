import { Cmp } from './friendly';
import { Pointer } from './pointer';
export declare class Heap<T> {
    private friendly;
    constructor(cmp: Cmp<T>);
    push(x: T): Pointer<T>;
    shift(): T;
    getSize(): number;
    getFront(): T;
}
export declare class NoEnoughElements extends Error {
}
