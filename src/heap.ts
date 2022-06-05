import {
	Heap as FriendlyHeap,
	Element,
	Cmp,
} from './friendly';
import {
	Pointer,
	PointerLike,
} from './pointer';
import assert = require('assert');


export class Heap<T> implements Iterable<T>{
	private friendly: FriendlyHeap<T>;

	public constructor(
		cmp: Cmp<T>,
		initials: T[] = [],
	) {
		this.friendly = new FriendlyHeap<T>(
			cmp,
			initials,
		);
	}

	public push(x: T): PointerLike<T> {
		const element: Element<T> = this.friendly.push(x);
		return new Pointer(element, this.friendly);
	}

	/**
	 * @throws RangeError
	 */
	public shift(): T {
		assert(
			this.friendly.n() > 0,
			new RangeError(),
		);
		return this.friendly.shift();
	}

	public getSize(): number {
		return this.friendly.n();
	}

	/**
	 * @throws RangeError
	 */
	public i(index: 0): T {
		assert(
			this.friendly.n() > 0,
			new RangeError(),
		);
		return this.friendly.getFront();
	}

	public *[Symbol.iterator]() {
		try {
			for (; ;) yield this.shift();
		} catch (err) { }
	}
}
