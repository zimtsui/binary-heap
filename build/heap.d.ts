export interface Cmp<T> {
    (x1: T, x2: T): number;
}
export declare class Heap<T> implements Iterable<T> {
    private cmp;
    a: FriendlyNode<T>[];
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
declare abstract class FriendlyHeap<T> extends Heap<T> {
    abstract remove(node: Node<T>): void;
}
export declare class Node<T> {
    protected x: T;
    protected i: number | null;
    protected h: FriendlyHeap<T>;
    constructor(x: T, i: number | null, h: Heap<T>);
    deref(): T;
    /**
     * @throws ReferenceError
     */
    remove(): void;
    isRemoved(): boolean;
}
declare abstract class FriendlyNode<T> extends Node<T> {
    abstract x: T;
    abstract i: number | null;
}
export {};
