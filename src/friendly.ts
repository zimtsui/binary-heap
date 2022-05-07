export interface Pointer<T> {
	value: T;
	location: number | null;
}

export class Heap<T> {
	public a: Pointer<T>[] = [<any>null];

	public constructor(
		private cmp: (x1: T, x2: T) => boolean,
	) { }

	private swapL(
		l1: number,
		l2: number,
	): void {
		const p1 = this.a[l1];
		const p2 = this.a[l2];
		this.a[l1] = p2;
		this.a[l2] = p1;
		p2.location = l1;
		p1.location = l2;
	}

	private cmpL(l1: number, l2: number): boolean {
		return this.cmp(this.a[l1].value, this.a[l2].value);
	}

	private up(self: number): number {
		for (; self > 1;) {
			let prior = self;

			const parent = self >> 1;
			if (this.cmpL(parent, self)) prior = parent;

			if (prior === parent) break;
			this.swapL(self, parent);
			self = parent;
		}
		return self;
	}

	private down(self: number): number {
		for (; ;) {
			let prior = self;

			const left = self << 1;
			if (left <= this.n() && this.cmpL(left, prior)) prior = left;

			const right = self << 1 | 1;
			if (right <= this.n() && this.cmpL(right, prior)) prior = right;

			if (prior === self) break;
			this.swapL(prior, self);
			self = prior;
		}
		return self;
	}

	public n() {
		return this.a.length - 1;
	}

	public push(x: T): Pointer<T> {
		const p: Pointer<T> = {
			value: x,
			location: this.n() + 1,
		};
		this.a.push(p);
		this.up(this.n());
		return p;
	}

	private pop(): Pointer<T> {
		const p = this.a.pop()!;
		p.location = null;
		return p;
	}

	public remove(p: Pointer<T>): void {
		if (p.location! === this.n()) {
			this.pop();
			return;
		}

		let self = p.location!;
		this.swapL(self, this.n());
		this.pop();

		self = this.up(self);
		self = this.down(self);
	}

	public shift(): T {
		const p = this.a[1];
		this.remove(p);
		return p.value;
	}

	public getFront(): T {
		return this.a[1].value;
	}
}
