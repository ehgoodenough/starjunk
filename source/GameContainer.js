var Pixi = require("pixi.js")

import Junkership from "./Junkership.js"
import Trashbot from "./Trashbot.js"
import Reference from "./Reference.js"
import Textures from "./Textures.js"
import Junk from "./Junk.js"
import Utility from "./Utility.js"

export default class GameContainer extends Pixi.Container {
    constructor() {
        super()
        this.playerCount = 0
        this.countdownToJunk = Utility.randomNumber(Reference.JUNK_FREQUENCY_RANGE.lower, Reference.JUNK_FREQUENCY_RANGE.upper)
        Textures.initTex()
    }
 
    gameOver() {
        console.log("Respawning Junkership")
        game.addChild(new Junkership())
    }

    spawnWave() {
        this.addChild(new Trashbot(Reference.GAME_WIDTH, Reference.GAME_HEIGHT / 2))
    }

    untilJunk(x, y) {
        if (this.countdownToJunk == 0) {
            this.countdownToJunk = Utility.randomNumber(Reference.JUNK_FREQUENCY_RANGE.lower, Reference.JUNK_FREQUENCY_RANGE.upper)
            console.log(this.countdownToJunk)
            this.addChild(new Junk(x, y))
        } else this.countdownToJunk--
    }
}