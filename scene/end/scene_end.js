class SceneEnd extends GuaScene{
    constructor(game, score) {
        super(game)
        this.score = score
        game.registerAction('r',function(){
            var first = SceneTitle.new(game)
            game.replaceScene(first)
        })
    }
    draw() {
        this.game.context.font="10px"
        this.game.context.fillText("Game Over", 300, 400)
        this.game.context.fillText("Score: " + this.score, 300, 430)
        this.game.context.fillText("Press R to Restart", 280, 460)
    }
}
