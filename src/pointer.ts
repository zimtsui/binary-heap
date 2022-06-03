import {
	Heap as FriendlyHeap,
	Element,
} from './friendly';
import assert = require('assert');


export interface PointerLike<T> {
	deref(): T;
	/**
	 * @throws ReferenceError
	 */
	remove(): void;
	isRemoved(): boolean;
}

export class Pointer<T> implements PointerLike<T>{
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
			new ReferenceError(),
		);
		this.friendly.remove(this.element);
	}

	public isRemoved(): boolean {
		return this.element.position === null;
	}
}
