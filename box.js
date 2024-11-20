class Box {
	constructor(x, y, z) {
		this.pos = createVector(x, y, z);
	}

	display() {
		push(this.pos.x, this.pos.y, this.pos.z);
		translate(this.pos.x, this.pos.y, this.pos.z);
		box(size);
		pop();
	}
}
