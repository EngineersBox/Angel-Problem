class Player {

    /**
     * Create a new Player
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x, y) {
        this.pos = createVector(x, y);
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
     * Set the Players position vector
     * 
     * @param {p5.Vector} pos 
     */
    setPos(pos) {
        this.pos = pos;
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
        super(x, y);
        this.power = power;
        this.highlight = color(86, 152, 181);
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
        super(~~(Math.random() * COLS), ~~(Math.random() * ROWS));
    }

}