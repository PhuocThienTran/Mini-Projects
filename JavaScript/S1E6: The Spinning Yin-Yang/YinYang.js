// Thien Tran Programming Series
// Episode 6: The p5’s Spinning Yin-Yang
// YouTube Link: TBD

// Arc
startAngle = 90;
endAngle = 270;

// White large circle
const whiteRadius = 60;
let whiteAngle = 270;
let whiteSpeed = 1;
const whiteX = 250;
const whiteY = 250;

// Black large circle
const blackRadius = 60;
let blackAngle = 90;
let blackSpeed = 1;
const blackX = 250;
const blackY = 250;

// White inner circle
const whiteInnerRadius = 60;
let whiteInnerAngle = 90;
let whiteInnerSpeed = 1;
const whiteInnerX = 250;
const whiteInnerY = 250;

// Black inner circle 
const blackInnerRadius = 60;
let blackInnerAngle = 270;
let blackInnerSpeed = 1;
const blackInnerX = 250;
const blackInnerY = 250;

function setup() {
  angleMode(DEGREES);
  createCanvas(500, 500);
}

function draw() {
  background("lightgray")
  yinyang();
}

function yinyang() {
  // Big circle
  fill(0);
  fill(255);
  ellipse(250, 250, 240, 240);

  // Arc
  fill(0);
  arc(250, 250, 240, 240, startAngle, endAngle);

  startAngle -= 1;
  endAngle -= 1;

  // White large circle
  fill(255);
  let largeWhiteX = whiteX + whiteRadius * cos(whiteAngle);
  let largeWhiteY = whiteY + whiteRadius * sin(whiteAngle);
  ellipse(largeWhiteX, largeWhiteY, 120, 120);

  whiteAngle -= whiteSpeed

  // Black large circle
  noStroke();
  fill(0);
  let largeBlackX = blackX + blackRadius * cos(blackAngle);
  let largeBlackY = blackY + blackRadius * sin(blackAngle);
  ellipse(largeBlackX, largeBlackY, 120, 120);

  blackAngle -= blackSpeed

  // White small circle
  fill(255);
  let smallWhiteX = whiteInnerX + whiteInnerRadius * cos(whiteInnerAngle);
  let smallWhiteY = whiteInnerY + whiteInnerRadius * sin(whiteInnerAngle);
  ellipse(smallWhiteX, smallWhiteY, 40, 40);

  whiteInnerAngle -= whiteInnerSpeed

  // Black small circle 
  fill(0);
  let smallBlackX = blackInnerX + blackInnerRadius * cos(blackInnerAngle);
  let smallBlackY = blackInnerY + blackInnerRadius * sin(blackInnerAngle);
  ellipse(smallBlackX, smallBlackY, 40, 40);

  blackInnerAngle -= blackInnerSpeed

}
