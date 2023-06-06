let item
let rockImage, paperImage, scissorsImage

function preload() {
    rockImage = loadImage('assets/rock.png')
    paperImage = loadImage('assets/paper.png')
    scissorsImage = loadImage('assets/scissors.png')
}

function setup() {
    createCanvas(800, 800);
    item = new Item("rock")
}

function draw() {
    background(220);
    item.show()
}