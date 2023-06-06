class Item {
    constructor(type) {
        this.position = createVector(random(width), random(height))
        this.type = type
    }

    show() {
        switch (this.type) {
            case 'rock':
                image(rockImage, this.position.x, this.position.y, 32, 32)
                break

            case 'paper':
                image(paperImage, this.position.x, this.position.y, 32, 32)
                break

            case 'scissors':
                image(scissorsImage, this.position.x, this.position.y, 32, 32)
                break

            default:
                throw new Error("unknown item type")
        }
    }
}