import {
	Heap as FriendlyHeap,
	Element,
	Cmp,
} from './friendly';
import { Pointer } from './pointer';
import {
	Fifo,
	Diligent,
	NoEnoughElements,
} from 'sequence-interfaces';
import assert = require('assert');


export class Heap<T> implements Fifo<T>, Diligent {
	private friendly: FriendlyHeap<T>;

	public constructor(cmp: Cmp<T>) {
		this.friendly = new FriendlyHeap<T>(cmp);
	}

	public push(x: T): Pointer<T> {
		const element: Element<T> = this.friendly.push(x);
		return new Pointer(element, this.friendly);
	}

	public isEmpty(): boolean {
		return this.friendly.n() === 0;
	}

	public shift(): T {
		assert(
			this.friendly.n() > 0,
			new NoEnoughElements(),
		);
		return this.friendly.shift();
	}

	public getSize(): number {
		return this.friendly.n();
	}

	public getFront(): T {
		assert(
			this.friendly.n() > 0,
			new NoEnoughElements(),
		);
		return this.friendly.getFront();
	}
}
