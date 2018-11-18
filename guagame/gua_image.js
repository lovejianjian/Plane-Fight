class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0,
        this.w = this.texture.width
        this.h = this.texture.height
        this.alive = true
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {
        if (this.alive){
            this.game.drawImage(this)
        }
    }
    update() {

    }
    collide (b) {
        return this.alive && b.alive && (rectIntersects(this, b) || rectIntersects(b, this))
    }
}
