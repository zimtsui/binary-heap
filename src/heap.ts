import {
	Heap as FriendlyHeap,
	Pointer as FriendlyPointer,
} from './friendly';
import { Pointer } from './pointer';
import assert = require('assert');


export class Heap<T> {
	private friendly: FriendlyHeap<T>;

	public constructor(
		cmp: (x1: T, x2: T) => boolean,
	) {
		this.friendly = new FriendlyHeap<T>(cmp);
	}

	public push(x: T): Pointer<T> {
		const p: FriendlyPointer<T> = this.friendly.push(x);
		return new Pointer(p, this.friendly);
	}

	public shift(): T {
		assert(
			this.friendly.n() > 0,
			new NoEnoughElem('No enough elements.'),
		);
		return this.friendly.shift();
	}

	public size(): number {
		return this.friendly.n();
	}

	public getFront(): T {
		assert(
			this.friendly.n() > 0,
			new NoEnoughElem('No enough elements.'),
		);
		return this.friendly.getFront();
	}
}

export class NoEnoughElem extends Error { }
