import assert = require('assert');


export interface Cmp<T> {
	(x1: T, x2: T): number;
}

export class Heap<T> implements Iterable<T> {
	public a: FriendlyNode<T>[] = [<any>null];

	public constructor(
		private cmp: Cmp<T>,
		initials: T[] = [],
	) {
		for (let i = 0; i < initials.length; i++)
			this.a.push(
				<FriendlyNode<T>>new Node<T>(
					initials[i],
					i + 1,
					this,
				),
			);
		for (let i = this.getSize() >> 1; i > 0; i--)
			this.down(i);
	}

	private swap(
		i1: number,
		i2: number,
	): void {
		const node1 = this.a[i1];
		const node2 = this.a[i2];
		this.a[i1] = node2;
		this.a[i2] = node1;
		node2.i = i1;
		node1.i = i2;
	}

	private cmpOnIndex(
		i1: number,
		i2: number,
	): number {
		return this.cmp(
			this.a[i1].x,
			this.a[i2].x,
		);
	}

	private up(self: number): number {
		for (; self > 1;) {
			let prior = self;

			const parent = self >> 1;
			if (this.cmpOnIndex(parent, self) <= 0) prior = parent;

			if (prior === parent) break;
			this.swap(self, parent);
			self = parent;
		}
		return self;
	}

	private down(self: number): number {
		for (; ;) {
			let prior = self;

			const left = self << 1;
			if (left <= this.getSize() && this.cmpOnIndex(left, prior) <= 0) prior = left;

			const right = self << 1 | 1;
			if (right <= this.getSize() && this.cmpOnIndex(right, prior) <= 0) prior = right;

			if (prior === self) break;
			this.swap(prior, self);
			self = prior;
		}
		return self;
	}

	public getSize() {
		return this.a.length - 1;
	}

	private insert(x: T): FriendlyNode<T> {
		const node = <FriendlyNode<T>>new Node<T>(
			x,
			this.getSize() + 1,
			this,
		);
		this.a.push(node);
		this.up(node.i!);
		return node;
	}

	private pop(): FriendlyNode<T> {
		const node = this.a.pop()!;
		node.i = null;
		return node;
	}

	protected remove(node: Node<T>): void {
		let self = (<FriendlyNode<T>>node).i!;
		this.swap(self, this.getSize());
		this.pop();
		if (self > this.getSize()) return;

		self = this.up(self);
		self = this.down(self);
	}

	private removeRoot(): FriendlyNode<T> {
		const node = this.a[1];
		this.remove(node);
		return node;
	}

	private getRoot(): FriendlyNode<T> {
		return this.a[1];
	}

	// Priority Queue

	/**
	 * @throws RangeError
	 */
	public i(index: 0): T {
		assert(
			this.getSize() > 0,
			new RangeError(),
		);
		return this.getRoot().x;
	}

	public push(x: T): Node<T> {
		return this.insert(x);
	}

	/**
	 * @throws RangeError
	 */
	public shift(): T {
		assert(
			this.getSize() > 0,
			new RangeError(),
		);
		return this.removeRoot().x;
	}

	public *[Symbol.iterator]() {
		try {
			for (; ;) yield this.shift();
		} catch (err) { }
	}
}


abstract class FriendlyHeap<T> extends Heap<T> {
	public abstract remove(node: Node<T>): void;
}


export class Node<T> {
	protected h: FriendlyHeap<T>;

	public constructor(
		protected x: T,
		protected i: number | null,
		h: Heap<T>,
	) {
		this.h = <FriendlyHeap<T>>h;
	}

	public deref(): T {
		return this.x;
	}

	/**
	 * @throws ReferenceError
	 */
	public remove(): void {
		assert(
			!this.isRemoved(),
			new ReferenceError(),
		);
		this.h.remove(this);
	}

	public isRemoved(): boolean {
		return this.i === null;
	}
}

abstract class FriendlyNode<T> extends Node<T> {
	public abstract x: T;
	public abstract i: number | null;
}
