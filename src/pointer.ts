import {
	Heap as FriendlyHeap,
	Pointer as FriendlyPointer,
} from './friendly';
import assert = require('assert');


export class Pointer<T> {
	public constructor(
		private friendly: FriendlyPointer<T>,
		private heap: FriendlyHeap<T>,
	) { }

	public deref(): T {
		return this.friendly.value;
	}

	public remove(): void {
		assert(
			!this.isRemoved(),
			new AlreadyRemoved('Already removed.'),
		);
		this.heap.remove(this.friendly);
	}

	public isRemoved(): boolean {
		return this.friendly.location === null;
	}
}

export class AlreadyRemoved extends Error { }
