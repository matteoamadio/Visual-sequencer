inlets = 1;
outlets = 1;

function list(r1, g1, b1, r2, g2, b2){
	d = Math.sqrt(Math.pow(r1-r2, 2) + Math.pow(g1-g2, 2) + Math.pow(b1-b2, 2));
	outlet(0, d);
	}