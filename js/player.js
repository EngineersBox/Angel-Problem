const PlayerType = {
    Human: "HUMAN",
    AI: "AI"
}

function toPlayerType(type_string) {
    switch (type_string) {
        case "HUMAN":
            return PlayerType.Human;
        case "AI":
            return PlayerType.AI;
        default:
            return PlayerType.Human;
    }
}

class Player {

    /**
     * Create a new Player
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {PlayerType}
     */
    constructor(x, y, player_type) {
        this.pos = createVector(x, y);
        this.player_type = player_type;
    }

    /**
     * Set the Players x and y values
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    setPos(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    /**
     * Set the Players type
     * 
     * @param {PlayerType} pos 
     */
    setPlayerType(player_type) {
        this.player_type = player_type;
    }

    getPType() {
        return this.player_type;
    }

}

class Angel extends Player {

    /**
     * Create a new Angel
     * 
     * @param {Number} power 
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(power, x, y) {
        super(x, y, PlayerType.Human);
        this.power = power;
        this.highlight = color(20, 42, 100);
    }

    setPower(power) {
        this.power = power;
    }

}

class Demon extends Player {

    /**
     * Create a new Demon
     */
    constructor() {
        super(~~(Math.random() * COLS), ~~(Math.random() * ROWS), PlayerType.Human);
    }

}