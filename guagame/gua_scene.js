class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.deathement = 0
        this.particlesnum = 0
        this.scores = 0
        this.death = 0
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
                e.draw()
        }
    }
    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
                e.update()
        }
    }
}
