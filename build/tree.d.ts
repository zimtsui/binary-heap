export interface Node<T> {
    value: T;
    position: number | null;
    tree: Tree<T>;
}
export interface Cmp<T> {
    (x1: T, x2: T): number;
}
export declare class Tree<T> {
    private cmp;
    a: Node<T>[];
    constructor(cmp: Cmp<T>, initials: T[]);
    private swapOnIndex;
    private cmpOnIndex;
    private up;
    private down;
    getSize(): number;
    push(x: T): Node<T>;
    private pop;
    remove(node: Node<T>): void;
    shift(): T;
    getRoot(): T;
}
