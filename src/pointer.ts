import {
	Tree,
	Node,
} from './tree';
import assert = require('assert');



export abstract class Pointer<T> {
	protected abstract node: Node<T>;

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


class constructor<T> extends Pointer<T> {
	public constructor(
		protected node: Node<T>,
	) {
		super();
	}
}


export function create<T>(node: Node<T>): Pointer<T> {
	return new constructor(node);
}
