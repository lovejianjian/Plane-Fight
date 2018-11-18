var loadBlock = function(game, n) {
    var storgelevel = localStorage.getItem("level" + n)
    storgelevel = JSON.parse(storgelevel)
    n = n - 1
    if (storgelevel){
        var level = storgelevel["block"]
    }else{
        var level = levels[n]
    }
    log(level)
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}
var loadPaddle = function(game, n) {
    var storgelevel = localStorage.getItem("level" + n)
    storgelevel = JSON.parse(storgelevel)
    // log("storgelevel", storgelevel)
    var paddle = Paddle(game)
    if (storgelevel){
        var p = storgelevel.paddle
        paddle.w = p.w
        paddle.x = p.x
        paddle.y = p.y
    }
    return paddle
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadBlock(game, Number(k))
            paddle = loadPaddle(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}


var __main = function() {
    var images = {
        sky: 'img/sky.png',
        plane: 'img/plane.png',
        bullet: 'img/bullet.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy_bullet: 'img/enemy_bullet.png',
        fire: 'img/fire.png'

    }
    var game = GuaGame.instance(30, images, function(g){
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()
