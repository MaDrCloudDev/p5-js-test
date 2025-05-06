class Box {
	constructor(x, y, z, angle, scl, speed) {
		this.pos = createVector(x, y, z);
		this.angle = angle;
		this.scl = scl;
		this.speed = speed;
	}

	update() {
		this.pos.z = this.scl * sin(this.angle);
		this.angle += this.speed;
	}

	display() {
		noStroke();
		let r = map(sin(this.angle + 6), -1, 1, 100, 255);
		let g = map(sin(this.angle + 4), -1, 1, 100, 255);
		let b = map(sin(this.angle + 2), -1, 1, 100, 255);
		fill(r, g, b);
		push(this.pos.x, this.pos.y, this.pos.z);
		translate(this.pos.x, this.pos.y, this.pos.z);
		box(size);
		pop();
	}
}
