let boxes = [];
let size = 20;
let cols, rows;
let margin = 30;
let scl = 50;

function setup() {
	createCanvas(500, 500, WEBGL);
	cols = (width - margin * 2) / size;
	rows = (height - margin * 2) / size;

	for (let i = 0; i < cols; i++) {
		boxes[i] = [];
		for (let j = 0; j < rows; j++) {
			let x = -width / 2 + margin + size / 2 + i * size;
			let y = -height / 2 + margin + size / 2 + j * size;
			let z = 0;
			let distance = dist(x, y, 0, 0);
			let angle = map(distance, 0, width / 2, 0, TWO_PI * 2);
			boxes[i][j] = new Box(x, y, z, angle, scl);
		}
	}
}

function draw() {
	background(220);
	orbitControl();
	// let m = map(mouseX, 0, width, 0, TWO_PI);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			// boxes[i][j].angle = m;
			boxes[i][j].update();
			boxes[i][j].display();
		}
	}
}
