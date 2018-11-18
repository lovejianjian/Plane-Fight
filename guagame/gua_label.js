class GuaLabel {
    constructor(game, text, font) {
        this.game = game
        this.text = text
        this.font = font
    }
    static new(game, text, font) {
        return new this(game, text, font)
    }
    draw() {
        this.game.context.font = this.font
        this.game.context.fillText(this.text, 300, 430)
    }
    update() {

    }
}
