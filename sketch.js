let items = []
let rockImage, paperImage, scissorsImage

function preload() {
    rockImage = loadImage('assets/rock.png')
    paperImage = loadImage('assets/paper.png')
    scissorsImage = loadImage('assets/scissors.png')
}

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i < 20; i++) {
        items.push(new Item(random(0, width), random(0, height), "rock"))
    }

    for (let i = 0; i < 20; i++) {
        items.push(new Item(random(0, width), random(0, height), "paper"))
    }

    for (let i = 0; i < 20; i++) {
        items.push(new Item(random(0, width), random(0, height), "scissors"))
    }
}

function draw() {
    background(220);
    for (let item of items) {
        item.wander()
        item.update()
        item.show()
        item.checkEdge()
    }
}