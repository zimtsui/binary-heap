export interface Node<T> {
	value: T;
	position: number | null;
	tree: Tree<T>;
}

export interface Cmp<T> {
	(x1: T, x2: T): number;
}

export class Tree<T> {
	public a: Node<T>[] = [<any>null];

	public constructor(
		private cmp: Cmp<T>,
		initials: T[],
	) {
		for (let i = 0; i < initials.length; i++)
			this.a.push({
				value: initials[i],
				position: i + 1,
				tree: this,
			});
		for (let i = this.getSize() >> 1; i > 0; i--)
			this.down(i);
	}

	private swapOnIndex(
		l1: number,
		l2: number,
	): void {
		const p1 = this.a[l1];
		const p2 = this.a[l2];
		this.a[l1] = p2;
		this.a[l2] = p1;
		p2.position = l1;
		p1.position = l2;
	}

	private cmpOnIndex(l1: number, l2: number): number {
		return this.cmp(this.a[l1].value, this.a[l2].value);
	}

	private up(self: number): number {
		for (; self > 1;) {
			let prior = self;

			const parent = self >> 1;
			if (this.cmpOnIndex(parent, self) <= 0) prior = parent;

			if (prior === parent) break;
			this.swapOnIndex(self, parent);
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
			this.swapOnIndex(prior, self);
			self = prior;
		}
		return self;
	}

	public getSize() {
		return this.a.length - 1;
	}

	public push(x: T): Node<T> {
		const node: Node<T> = {
			value: x,
			position: this.getSize() + 1,
			tree: this,
		};
		this.a.push(node);
		this.up(this.getSize());
		return node;
	}

	private pop(): Node<T> {
		const node = this.a.pop()!;
		node.position = null;
		return node;
	}

	public remove(node: Node<T>): void {
		if (node.position! === this.getSize()) {
			this.pop();
			return;
		}

		let self = node.position!;
		this.swapOnIndex(self, this.getSize());
		this.pop();

		self = this.up(self);
		self = this.down(self);
	}

	public shift(): T {
		const node = this.a[1];
		this.remove(node);
		return node.value;
	}

	public getRoot(): T {
		return this.a[1].value;
	}
}
