export interface Cmp<T> {
    (x1: T, x2: T): number;
}
export declare class Heap<T> implements Iterable<T> {
    private cmp;
    private a;
    constructor(cmp: Cmp<T>, initials?: T[]);
    private swap;
    private cmpOnIndex;
    private up;
    private down;
    getSize(): number;
    private insert;
    private pop;
    protected remove(node: Node<T>): void;
    private removeRoot;
    private getRoot;
    /**
     * @throws RangeError
     */
    i(index: 0): T;
    push(x: T): Node<T>;
    /**
     * @throws RangeError
     */
    shift(): T;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
export declare class Node<T> {
    protected x: T;
    protected i: number | null;
    private h;
    constructor(x: T, i: number | null, h: Heap<T>);
    deref(): T;
    /**
     * @throws ReferenceError
     */
    remove(): void;
    isRemoved(): boolean;
}
