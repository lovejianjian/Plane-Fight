var EnableMouseDrag = function (obj, game) {
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        if(!window.editenable){
            return
        }
        var x = event.offsetX
        var y = event.offsetY
        log(x, y)
        log(obj.x, obj.y)
        // 检查是否点中了 ball
        if (obj.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {
        if(!window.editenable){
            return
        }
        var x = event.offsetX
        var y = event.offsetY
        // log(x, y, 'move')
        if (enableDrag) {
            log(x, y, 'drag')
            obj.x = x
            obj.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
        if(!window.editenable){
            return
        }
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, 'up')
        enableDrag = false
    })
    return obj
}