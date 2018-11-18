class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.name = 'bullet'
        this.speed = 2
    }
    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
    }
}
