class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'Press K To Start', "20px Georgia")
        this.addElement(label)
        game.registerAction('k',function(){
            var start = Scene.new(game)
            game.replaceScene(start)
        })
    }
}
