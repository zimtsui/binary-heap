import {
	Tree,
	Cmp,
} from './tree';
import { Pointer } from './pointer';
import assert = require('assert');


export class Heap<T> implements Iterable<T>{
	private tree: Tree<T>;

	public constructor(
		cmp: Cmp<T>,
		initials: T[] = [],
	) {
		this.tree = new Tree<T>(
			cmp,
			initials,
		);
	}

	public push(x: T): Pointer<T> {
		const node = this.tree.push(x);
		return new Pointer(node);
	}

	/**
	 * @throws RangeError
	 */
	public shift(): T {
		assert(
			this.tree.getSize() > 0,
			new RangeError(),
		);
		return this.tree.shift();
	}

	public getSize(): number {
		return this.tree.getSize();
	}

	/**
	 * @throws RangeError
	 */
	public i(index: 0): T {
		assert(
			this.tree.getSize() > 0,
			new RangeError(),
		);
		return this.tree.getRoot();
	}

	public *[Symbol.iterator]() {
		try {
			for (; ;) yield this.shift();
		} catch (err) { }
	}
}
