class Item {
    constructor(x, y, type) {
        this.pos = createVector(x, y)
        this.vel = createVector(1, 0)
        this.acc = createVector(0, 0)

        this.xoff = 0
        this.maxForce = 0.2
        this.maxSpeed = 4

        this.type = type
    }

    update() {
        this.vel.add(this.acc)
        this.vel.limit(this.maxSpeed)
        this.pos.add(this.vel)
        this.acc.set(0, 0)
    }

    wander() {
        noiseSeed()
        let angle = noise(this.xoff) * TWO_PI * 4;
        let steer = p5.Vector.fromAngle(angle);
        steer.setMag(this.maxForce);
        this.applyForce(steer);
        this.xoff += 0.01;
    }

    applyForce(force) {
        this.acc.add(force)
    }

    checkEdge() {
        if (this.pos.x > width - 16) {
            this.pos.x = width - 16
            this.vel.mult(-1)
        }

        if (this.pos.x < 16) {
            this.pos.x = 16
            this.vel.mult(-1)
        }

        if (this.pos.y > height - 16) {
            this.pos.y = height - 16
            this.vel.mult(-1)
        }

        if (this.pos.y < 16) {
            this.pos.y = 16
            this.vel.mult(-1)
        }
    }
    
    eat(items) {
        for (let item of items) {
            if (item.type == this.type) continue

            const distance =  p5.Vector.dist(this.pos, item.pos);
            if (distance <= 32) {
                if (this.type === "scissors" && item.type === "paper") {
                    item.type = "scissors"
                }

                if (this.type === "rock" && item.type === "scissors") {
                    item.type = "rock"
                }

                if (this.type === "paper" && item.type === "rock") {
                    item.type = "paper"
                }
            }
        }
    }

    show() {
        imageMode(CENTER)
        switch (this.type) {
            case 'rock':
                image(rockImage, this.pos.x, this.pos.y, 32, 32)
                break

            case 'paper':
                image(paperImage, this.pos.x, this.pos.y, 32, 32)
                break

            case 'scissors':
                image(scissorsImage, this.pos.x, this.pos.y, 32, 32)
                break

            default:
                throw new Error("unknown item type")
        }
    }
}