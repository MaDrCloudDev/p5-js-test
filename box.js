class Box {
	constructor(x, y, z, angle, scl) {
		this.pos = createVector(x, y, z);
		this.angle = angle;
		this.scl = scl;
	}

	update() {
		this.pos.z = this.scl * sin(this.angle);
	}

	display() {
		push(this.pos.x, this.pos.y, this.pos.z);
		translate(this.pos.x, this.pos.y, this.pos.z);
		box(size);
		pop();
	}
}
