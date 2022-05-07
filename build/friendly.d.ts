export interface Pointer<T> {
    value: T;
    location: number | null;
}
export declare class Heap<T> {
    private cmp;
    a: Pointer<T>[];
    constructor(cmp: (x1: T, x2: T) => boolean);
    private swapL;
    private cmpL;
    private up;
    private down;
    n(): number;
    push(x: T): Pointer<T>;
    private pop;
    remove(p: Pointer<T>): void;
    shift(): T;
    getFront(): T;
}
