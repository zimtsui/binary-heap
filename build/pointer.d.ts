import { Node } from './tree';
export declare class Pointer<T> {
    private node;
    constructor(node: Node<T>);
    deref(): T;
    /**
     * @throws ReferenceError
     */
    remove(): void;
    isRemoved(): boolean;
}
