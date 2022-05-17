export interface Element<T> {
    value: T;
    location: number | null;
}
export interface Cmp<T> {
    (x1: T, x2: T): number;
}
export declare class Heap<T> {
    private cmp;
    a: Element<T>[];
    constructor(cmp: Cmp<T>, initials?: T[]);
    private swapL;
    private cmpL;
    private up;
    private down;
    n(): number;
    push(x: T): Element<T>;
    private pop;
    remove(e: Element<T>): void;
    shift(): T;
    getFront(): T;
}
