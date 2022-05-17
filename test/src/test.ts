import {
	Heap,
	Cmp,
} from '../..';
import test from 'ava';
import assert = require('assert');


class Tester<T> {
	public heap: Heap<T>;;
	public array: T[] = [];

	public constructor(
		private cmp: Cmp<T>,
	) {
		this.heap = new Heap(cmp);
	}

	public push(x: T): void {
		this.heap.push(x);
		this.array.push(x);
	}

	public shift(): void {
		if (this.array.length === 0) return;

		const heapX = this.heap.shift();

		const minX = this.array.reduce((min, x) => this.cmp(x, min) < 0 ? x : min);
		const minXIndex = this.array.findIndex(x => x == minX);
		this.array.splice(minXIndex, 1);

		assert.strictEqual(heapX, minX);
	}
}

const enum Operation {
	PUSH,
	SHIFT,
}

test('random', async t => {
	const tester = new Tester<number>((x1, x2) => x1 - x2);
	for (let i = 0; i < 1000; i++) {
		const op = Math.random() < .9 ? Operation.PUSH : Operation.SHIFT;
		if (op === Operation.PUSH)
			tester.push(Math.round(Math.random() * 1000000));
		else
			tester.shift();

	}
});
