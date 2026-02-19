controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Tilemap != "topDown" && mySprite.vy == 0) {
        mySprite.setVelocity(0, -250)
    }
})
function Topdown_Controls () {
    Tilemap = "topDown"
    controller.moveSprite(mySprite, 100, 100)
}
function Platformer_Controls () {
    Tilemap = "platform"
    controller.moveSprite(mySprite, 100, 100)
    mySprite.ay = 500
}
function Sidescroller_controls () {
    Tilemap = "sideScroll"
    controller.moveSprite(mySprite, 100, 100)
    mySprite.vy = 500
}
let Tilemap = ""
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`Start Tile`)
