import { Pointer } from './pointer';
export declare class Heap<T> {
    private friendly;
    constructor(cmp: (x1: T, x2: T) => boolean);
    push(x: T): Pointer<T>;
    shift(): T;
    size(): number;
    getFront(): T;
}
export declare class NoEnoughElem extends Error {
}
