let boxes = [];
let size = 25;
let cols, rows;
let margin = 50;
let scl = 25;
let speed = 0.18;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	calculateGrid();
}

function calculateGrid() {
	cols = (width - margin * 2) / size;
	rows = (height - margin * 2) / size;

	boxes = [];
	for (let i = 0; i < cols; i++) {
		boxes[i] = [];
		for (let j = 0; j < rows; j++) {
			let x = -width / 2 + margin + size / 2 + i * size;
			let y = -height / 2 + margin + size / 2 + j * size;
			let z = 0;
			let distance = dist(x, y, 0, 0);
			let angle = map(distance, 0, width / 2, 0, TWO_PI * 2);
			boxes[i][j] = new Box(x, y, z, angle, scl, speed);
		}
	}
}

function draw() {
	background(0);
	orbitControl();

	let doUpdate = frameCount % 2 === 0;

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			if (doUpdate) boxes[i][j].update();
			boxes[i][j].display();
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	calculateGrid();
}
