import { Node } from './tree';
export declare abstract class Pointer<T> {
    protected abstract node: Node<T>;
    deref(): T;
    /**
     * @throws ReferenceError
     */
    remove(): void;
    isRemoved(): boolean;
}
export declare function create<T>(node: Node<T>): Pointer<T>;
