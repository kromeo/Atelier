var mouseclicks = [];


function setup(){
	createCanvas(720,480);
	background(0, 230, 255);
	var button = createButton('add particle');
	button.mousePressed (addparticle);
	noStroke();
}


function draw(){
	translate(width/2, height/2);
	for(var i = 0; i < mouseclicks.length; i++){
		fill(mouseclicks[i].color);
		ellipse(mouseclicks[i].x, mouseclicks[i].y, 10);
		mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].xspeed;
		mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].yspeed;
	}
}

function addparticle(){
	var clickposition = {
		x: random(width),
		y: random(height),
		xspeed: random(-2,2),
		yspeed: random(-2,2),
		color: color(random(100,150), random(255), random(250,255))
	}
	mouseclicks.push(clickposition);
}