import {
	Heap as FriendlyHeap,
	Element,
} from './friendly';
import assert = require('assert');


export class Pointer<T> {
	public constructor(
		private element: Element<T>,
		private friendly: FriendlyHeap<T>,
	) { }

	public deref(): T {
		return this.element.value;
	}

	public remove(): void {
		assert(
			!this.isRemoved(),
			new AlreadyRemoved('Already removed.'),
		);
		this.friendly.remove(this.element);
	}

	public isRemoved(): boolean {
		return this.element.location === null;
	}
}

export class AlreadyRemoved extends Error { }
