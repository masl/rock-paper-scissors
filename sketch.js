let items = []
let rockImage, paperImage, scissorsImage
let statsBar

function preload() {
    rockImage = loadImage('assets/rock.png')
    paperImage = loadImage('assets/paper.png')
    scissorsImage = loadImage('assets/scissors.png')
}

function setup() {
    statsBar = new Stats(800, 20)
    createCanvas(800, 800 + statsBar.height);

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
        item.eat(items)
    }

    statsBar.sum(items)
    statsBar.show()
}