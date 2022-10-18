controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . . . 2 2 b b b b b b . . 
        . . . . . . 2 2 b b b b b b . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Millenium_falcon, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let foes: Sprite = null
let projectile: Sprite = null
let Millenium_falcon: Sprite = null
Millenium_falcon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . 1 1 b 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 b b b b 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 f 1 . . . . 
    . . . 1 1 b b 1 1 1 1 1 . . . . 
    . . . . 1 1 b 1 1 1 f 1 . . . . 
    . . 1 1 1 1 1 1 f 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Millenium_falcon, 200, 200)
Millenium_falcon.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    foes = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 3 . 
        . . . . . . . . . . . a a 3 3 2 
        . . . . . . . . . . a a a 3 . . 
        . . . . . . . . . . . a a 3 3 2 
        . . . . . . . . . . . . . . 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    foes.setVelocity(-100, 0)
    foes.setPosition(160, randint(5, 115))
    foes.setFlag(SpriteFlag.AutoDestroy, true)
})
