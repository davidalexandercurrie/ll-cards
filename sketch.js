let cards = [
  {
    act: 'you do their dishes',
    token: 'acts of service',
    value: 1,
  },
  {
    act: 'you pick up their dog’s shit',
    token: 'acts of service',
    value: 1,
  },
  {
    act: 'you order food for them',
    token: 'gift giving',
    value: 1,
  },
  {
    act: 'you buy them flowers',
    token: 'gift giving',
    value: 1,
  },
  {
    act: 'you give them a massage',
    token: 'touch',
    value: 1,
  },
  {
    act: 'you pick them up from work',
    token: 'quality time',
    value: 1,
  },
  {
    act: 'you swipe up on their story',
    token: 'words of affirmation',
    value: 1,
  },
  {
    act: 'you serenade them in a park',
    token: 'words of affirmation',
    value: 1,
  },
  {
    act: 'you tell them why you appreciate them',
    token: 'words of affirmation',
    value: 1,
  },
  {
    act: 'you hugged them',
    token: 'touch',
    value: 1,
  },
  {
    act: 'you plan their birthday party',
    token: 'acts of service',
    value: 1,
  },
  {
    act: 'you buy their mom perfume',
    token: 'gift giving',
    value: 1,
  },
  {
    act: 'you ghost them for a week',
    token: 'thorn',
    value: 0,
  },
  {
    act: 'you don’t pick up their call',
    token: 'thorn',
    value: 0,
  },
  {
    act: 'you miss your date',
    token: 'thorn',
    value: 0,
  },
  {
    act: 'you avoid a chance to be vulnerable',
    token: 'thorn',
    value: 0,
  },
  {
    act: 'you interrupt them',
    token: 'thorn',
    value: 0,
  },
  {
    act: 'you give someone else your number',
    token: 'thorn',
    value: 0,
  },
  {
    act: 'you liked your ex’s photo',
    token: 'thorn',
    value: 0,
  },
  {
    act: 'you complain about your partner',
    token: 'thorn',
    value: 0,
  },
];

let img = {};

function preload() {
  img['words of affirmation'] = loadImage('images/bubble.svg');
  img['quality time'] = loadImage('images/clock.svg');
  img['gift giving'] = loadImage('images/gift.svg');
  img['touch'] = loadImage('images/hand.svg');
  img['acts of service'] = loadImage('images/heart.svg');
  img['thorn'] = loadImage('images/thorn.svg');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  background(255);

  setTimeout(() => {
    let card = random(cards);
    textAlign(CENTER);
    fill('violet');
    rect(width / 2 - 200, 200, 400, 600);
    textSize(32);
    fill(255);
    text(card.act, width / 2 - 180, 300, 360, 200);
    text(card.token, width / 2 - 180, 470, 360, 200);
    textSize(40);
    text(card.token !== 'thorn' ? '+1' : '-1', width / 2 - 350, 640, 550, 200);

    image(img[card.token], width / 2 - 40, 620, 80, 80);
  }, 500);
}
