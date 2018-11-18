class EnemyBullet extends GuaImage {
    constructor(game) {
        super(game, 'enemy_bullet')
        this.setup()
    }
    setup() {
        this.name = 'enemy_bullet'
        this.speed = 2
    }
    update() {
        this.speed = config.bullet_speed
        this.y += this.speed
    }
}
