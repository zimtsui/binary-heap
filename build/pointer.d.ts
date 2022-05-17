import { Heap as FriendlyHeap, Element } from './friendly';
export declare class Pointer<T> {
    private element;
    private friendly;
    constructor(element: Element<T>, friendly: FriendlyHeap<T>);
    deref(): T;
    remove(): void;
    isRemoved(): boolean;
}
export declare class AlreadyRemoved extends Error {
}
