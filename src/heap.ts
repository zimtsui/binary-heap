import {
	Heap as FriendlyHeap,
	Element,
	Cmp,
} from './friendly';
import { Pointer } from './pointer';
import assert = require('assert');


export class Heap<T> {
	private friendly: FriendlyHeap<T>;

	public constructor(cmp: Cmp<T>) {
		this.friendly = new FriendlyHeap<T>(cmp);
	}

	public push(x: T): Pointer<T> {
		const element: Element<T> = this.friendly.push(x);
		return new Pointer(element, this.friendly);
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

export class NoEnoughElements extends Error { }
