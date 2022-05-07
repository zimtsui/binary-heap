import { Heap as FriendlyHeap, Pointer as FriendlyPointer } from './friendly';
export declare class Pointer<T> {
    private friendly;
    private heap;
    constructor(friendly: FriendlyPointer<T>, heap: FriendlyHeap<T>);
    deref(): T;
    remove(): void;
    isRemoved(): boolean;
}
export declare class AlreadyRemoved extends Error {
}
