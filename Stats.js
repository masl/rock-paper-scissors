class Stats {
    constructor(statsWidth, statsHeight) {
        this.width = statsWidth
        this.height = statsHeight
    }

    sum(items) {
        this.rockCount = 0
        this.paperCount = 0
        this.scissorsCount = 0

        for (let item of items) {
            switch (item.type) {
                case 'rock':
                    this.rockCount++
                    break

                case 'paper':
                    this.paperCount++
                    break

                case 'scissors':
                    this.scissorsCount++
                    break

                default:
                    throw new Error("unknown item type")
            }
        }
    }

    show() {
        const sum = this.rockCount + this.paperCount + this.scissorsCount
        rectMode(CORNER);
        noStroke()

        // rock
        fill(136, 140, 141);
        const rockMap = map(this.rockCount, 0, sum, 0, this.width)
        rect(0, height - this.height, rockMap);

        // paper
        fill(245, 245, 245)
        const paperMap = map(this.paperCount, 0, sum, 0, this.width)
        rect(rockMap, height - this.height, paperMap);

        // scissors
        fill(191, 23, 56)
        const scissorsMap = map(this.scissorsCount, 0, sum, 0, this.width)
        rect(rockMap + paperMap, height - this.height, scissorsMap);
    }
}
