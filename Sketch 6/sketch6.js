var mouseclicks = [];

function setup(){
	createCanvas(720,480);
	var button = createButton('Let it snow!');
	button.mousePressed(addparticle);
	noStroke();
}

function draw(){
	background(14,39,60);

	fill(220)
	ellipse(200,50, 400, 160);

	fill(150)
	ellipse(180,100, 400, 160);

	fill(180)
	ellipse(500,50, 470, 190);

	fill(255)
	ellipse(450,100, 550, 180);


	for(var i = 0; i < mouseclicks.length; i++){
		fill(mouseclicks[i].color);
		ellipse(mouseclicks[i].x, mouseclicks[i].y, 15,15);
		mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].xspeed;
		mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].yspeed;
	}
}

function addparticle(){
	var clickposition = {
		x: random(width),
		y: random(0),
		xspeed: random(-2,2),
		yspeed: random(2),
		color: color(255)
	}
	mouseclicks.push(clickposition);
}
