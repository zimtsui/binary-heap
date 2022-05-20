import { Heap as FriendlyHeap, Element } from './friendly';
export interface PointerLike<T> {
    deref(): T;
    /**
     * @throws ReferenceError
     */
    remove(): void;
    isRemoved(): boolean;
}
export declare class Pointer<T> implements PointerLike<T> {
    private element;
    private friendly;
    constructor(element: Element<T>, friendly: FriendlyHeap<T>);
    deref(): T;
    remove(): void;
    isRemoved(): boolean;
}
