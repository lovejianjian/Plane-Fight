class Player extends GuaImage {
    constructor(game) {
        super(game, 'plane')
        this.setup()
    }
    setup() {
        this.life = 3
        this.name = 'player'
        this.score = 0
        this.speed = 5
        this.cooldown = 0
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }
    fire() {
        if (this.cooldown == 0){
            this.cooldown = config.fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }
    }

    moveLeft() {
        if(this.x > 0) {
            this.x -= this.speed
        }
    }
    moveRight() {
        if(this.x < 500 - this.w) {
            this.x += this.speed
        }
    }
    moveUp() {
        if(this.y > 0) {
            this.y -= this.speed
        }
    }
    moveDown() {
        if(this.y < 512 - this.h) {
            this.y += this.speed
        }
    }
}
