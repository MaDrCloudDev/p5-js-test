function setup() {
	createCanvas(400, 400, WEBGL);
}

function draw() {
	background(220);
	orbitControl();

	translate(0, 0, 0);
	box(50);

	translate(50, 0, 0);
	box(50);

	translate(0, 50, 0);
	box(50);

	translate(50, 50, 0);
	box(50);
}
