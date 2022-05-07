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
		for (; ;) {
			let min = self;

			const parent = self >> 1;
			if (parent > 0 && this.cmpL(min, parent)) min = parent;

			if (min === self) break;
			this.swapL(min, self);
			self = min;
		}
		return self;
	}

	private down(self: number): number {
		for (; ;) {
			let min = self;

			const left = self << 1;
			if (left <= this.n() && this.cmpL(left, min)) min = left;

			const right = self << 1 | 1;
			if (right <= this.n() && this.cmpL(right, min)) min = right;

			if (min === self) break;
			this.swapL(min, self);
			self = min;
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

	public remove(p: Pointer<T>): void {
		let self = p.location!;
		p.location = null;

		if (self === this.n()) {
			this.a.pop();
			return;
		}

		this.a[self] = this.a.pop()!;
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
