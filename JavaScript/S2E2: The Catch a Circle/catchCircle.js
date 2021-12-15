// Thien Tran Programming Series
// Season 2 Episode 2: The p5's Catch a Circle
// YouTube Link: TBD
// Note: Not fully implemented, a challenge for the you to complete 
// - being stopping the circle from moving, and resuming when the mouse 
// is no longer on top. 

let x = 10;
let speed = 2;

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(0);
    ellipse(x, height / 2, 20, 20);

    if(x > width - 10 || x < 10){
        speed = - speed
    }

    let distance = dist(mouseX, mouseY, x, height / 2)
    if(distance < 24){
        speed = 0
    } else {
        x = x + speed
    }
}
