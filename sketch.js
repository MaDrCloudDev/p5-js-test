let boxes = [];
let size = 20;
let cols, rows;
let margin = 30;

function setup() {
	createCanvas(400, 400, WEBGL);
	cols = (width - margin * 2) / size;
	rows = (height - margin * 2) / size;

	for (let i = 0; i < cols; i++) {
		boxes[i] = [];
		for (let j = 0; j < rows; j++) {
			let x = -width / 2 + margin + size / 2 + i * size;
			let y = -height / 2 + margin + size / 2 + j * size;
			let z = 0;
			boxes[i][j] = new Box(x, y, z);
		}
	}
}

function draw() {
	background(220);
	orbitControl();

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			boxes[i][j].display();
		}
	}
}
