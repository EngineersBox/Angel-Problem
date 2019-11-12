class Angel {

    /**
     * Create a new Angel
     * 
     * @param {Number} power 
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(power, x, y) {
        this.power = power;
        this.pos = createVector(x, y);
    }

    /**
     * Set the Angel's power value (radius)
     * 
     * @param {Number} power 
     */
    setPower(power) {
        this.power = power;
    }

    /**
     * Set the Angel's x and y values
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    setPos(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    /**
     * Set the Angel's position vector
     * 
     * @param {p5.Vector} pos 
     */
    setPos(pos) {
        this.pos = pos;
    }

}

class Demon {

    constructor() {
        this.pos = createVector(~~(Math.random() * COLS), ~~(Math.random() * ROWS));
        this.captured = [];
    }

    /**
     * Set the Demon's x and y values
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    setPos(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    /**
     * Set the Demon's position vector
     *
     * @param {p5.Vector} pos
     */
    setPos(pos) {
        this.pos = pos;
    }

}