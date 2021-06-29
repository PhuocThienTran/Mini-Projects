// Thien Tran Programming Series
// Episode 9: The p5’s Lissajous curve
// Comment: n/a

// x = Asin(at + angle)
// y = Bsin(bt)

let t = 0;

function setup() {
  createCanvas(700, 700);
  background(0);
}

function draw() {

  for(let i = 1; i < 5; i++) {
    x = 200 * sin (3 * t + PI/2)
    y = 200 * sin (1 * t)

    fill(255);
    ellipse(350 + x, 350 + y, 4, 4)
    t += 0.01
  }
}
