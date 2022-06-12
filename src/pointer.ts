import {
	Tree,
	Node,
} from './tree';
import assert = require('assert');



export class Pointer<T> {
	public constructor(
		private node: Node<T>,
	) { }

	public deref(): T {
		return this.node.value;
	}

	/**
	 * @throws ReferenceError
	 */
	public remove(): void {
		assert(
			!this.isRemoved(),
			new ReferenceError(),
		);
		this.node.tree.remove(this.node);
	}

	public isRemoved(): boolean {
		return this.node.position === null;
	}
}
