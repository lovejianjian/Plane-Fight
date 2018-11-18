class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 3)
        super(game, 'enemy' + type)
        this.setup()
        this.alive = true
        this.name = 'enemy'
    }
    setup() {
        this.speed = randomBetween(2, 4)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 1000)
        this.cooldown = 0
    }

    update() {
        this.y += this.speed
        if (this.y > 512) {
            this.setup()
        }
        if (this.cooldown > 0) {
            this.cooldown--
        }
        if (this.alive && this.y>0){
            this.fire()
        }
    }
    fire() {
        if (this.cooldown == 0){
            this.cooldown = config.enemy_fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y + this.h
            var b = EnemyBullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }
    }

}
