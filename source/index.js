var Pixi = require("pixi.js")
var Afloop = require("afloop")
var Keyb = require("keyb")

import Junkership from "./Junkership.js"
import Reference from "./Reference.js"
import Score from "./Score.js"
import GameContainer from "./GameContainer.js"
import PowerUp from "./PowerUp.js"

var renderer = Pixi.autoDetectRenderer(Reference.GAME_WIDTH, Reference.GAME_HEIGHT)
renderer.backgroundColor = 0x222222
renderer.roundPixels = true

var mount = document.getElementById("mount")
mount.insertBefore(renderer.view, mount.firstChild)
window.game = new GameContainer()

var loop = new Afloop(function(delta) {
    game.children.forEach((child) => {
        child.update(delta)
    })
    if (game.playerCount === 0) {
        game.gameOver()
    }
    renderer.render(game)
})