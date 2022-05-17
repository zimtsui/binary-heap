import { Cmp } from './friendly';
import { Pointer } from './pointer';
import { Fifo, Diligent } from 'sequence-interfaces';
export declare class Heap<T> implements Fifo<T>, Diligent {
    private friendly;
    constructor(cmp: Cmp<T>);
    push(x: T): Pointer<T>;
    isEmpty(): boolean;
    shift(): T;
    getSize(): number;
    getFront(): T;
}
