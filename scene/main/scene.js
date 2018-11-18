const config = {
    player_speed: 10,
    enemy_speed: 5,
    bullet_speed: 5,
    fire_cooldown: 10,
    enemy_fire_cooldown: 30,
}


class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()

    }

    setup() {
        var game = this.game
        this.numberOfEnemies = 7
        this.bg = GuaImage.new(game, 'sky')
        this.player = Player.new(game)
        this.player.x = 150
        this.player.y = 450
        this.addElement(this.bg)
        this.addElement(this.player)
        this.addEnemies()

    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemis = es
    }

    setupInputs() {
        var g = this.game
        var s = this
        //log(s)
        g.registerAction('a', function () {
            s.player.moveLeft()
        })
        g.registerAction('d', function () {
            s.player.moveRight()
        })
        g.registerAction('w', function () {
            s.player.moveUp()
        })
        g.registerAction('s', function () {
            s.player.moveDown()
        })
        g.registerAction('j', function () {
            s.player.fire()
        })

    }

    enemy_shooted() {
        // 击中敌机
        var self = this
        var bullets = []
        var enemys = []
        for (var i = 0; i < self.elements.length; i++) {
            var e = self.elements[i]
            if (e.name == "bullet" && e.alive) {
                bullets.push(e)
            } else if (e.name == "enemy" && e.alive) {
                enemys.push(e)
            }
        }
        if (enemys.length < 1) {
            var s = new SceneEnd(self.game, self.player.score || 0)
            self.game.replaceScene(s)
        }
        for (var i = 0; i < bullets.length; i++) {
            var b = bullets[i]
            for (var j = 0; j < enemys.length; j++) {
                var e = enemys[j]
                if (b.collide(e) && e.y > 0) {
                    e.alive = false
                    b.alive = false
                    self.player.score += 100
                    var ps = GuaParticleSystem.new(this.game)
                    ps.x = e.x + e.w / 2
                    ps.y = e.y + e.h / 2
                    this.addElement(ps)
                    this.particlesnum++
                }
            }
        }
    }

    player_shooted() {
        //  被击中
        var self = this
        for (var i = 0; i < self.elements.length; i++) {
            var e = self.elements[i]
            if (e.name == "enemy_bullet") {
                if (e.collide(self.player)) {
                    var s = new SceneEnd(self.game, self.player.score || 0)
                    self.game.replaceScene(s)
                }
            }
        }
    }


    bullet_collsion() {
        // 子弹相撞
        var self = this
        var bullets = []
        var enemy_bullets = []
        for (var i = 0; i < self.elements.length; i++) {
            var e = self.elements[i]
            if (e.name == "bullet" && e.alive) {
                bullets.push(e)
            } else if (e.name == "enemy_bullet" && e.alive) {
                enemy_bullets.push(e)
            }
        }
        for (var i = 0; i < bullets.length; i++) {
            var b = bullets[i]
            for (var j = 0; j < enemy_bullets.length; j++) {
                var eb = enemy_bullets[j]
                if (b.collide(eb)) {
                    var ps = GuaParticleSystem.new(this.game)
                    ps.x = b.x + b.w / 2
                    ps.y = b.y + b.h / 2
                    this.addElement(ps)
                    this.particlesnum++
                    b.alive = false
                    eb.alive = false
                }
            }
        }
    }

    plane_collsion() {
        // 飞机相撞
        var self = this
        for (var i = 0; i < self.elements.length; i++) {
            var e = self.elements[i]
            if (e.name == "enemy") {
                if (e.collide(self.player)) {
                    var ps = GuaParticleSystem.new(this.game)
                    ps.x = e.x + e.w / 2
                    ps.y = e.y + e.h / 2
                    this.addElement(ps)
                    this.particlesnum++
                    self.player.score += 100
                    var s = new SceneEnd(self.game, self.player.score || 0)
                    self.game.replaceScene(s)
                }
            }
        }
    }

    update() {
        var self = this
        self.enemy_shooted()
        self.player_shooted()
        self.bullet_collsion()
        self.plane_collsion()
        super.update()
    }
}
