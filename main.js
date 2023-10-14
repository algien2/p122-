function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  circle (30, 30, 20);
circle(630, 30, 20);
//describe('A white circle with black outline in the middle of a gray canvas.');
ellipse(560, 46, 55, 55);
//describe('A white ellipse with black outline in middle of a gray canvas.');
rect(62, 20, 55, 55, 20, 15, 10, 5);
rect(393, 20, 55, 55, 20, 15, 10, 5);
//describe('A white rectangle with a black outline and round edges of different radii.');
rect(24, 20, 55, 55, 20);
rect(3789.264312, 20, 55, 55, 20);
//describe('A white rectangle with a black outline and round edges on a gray canvas.');
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}