/**
 * States enum:
 * - EMPTY
 * - CAPTURED
 * - ANGEL
 */
const States = Object.freeze({
    EMPTY: color(127.5),
    CAPTURED: color(200),
    ANGEL: color(0, 0, 255),
    DEMON: color(255, 0, 0)
});

class Square {

    /**
     * Create a new sqaure with a given state (default empty)
     * 
     * @param {States} state 
     */
    constructor(state=States.EMPTY) {
        this.state = state;
    }

    isCaptured() {
        return this.state == States.CAPTURED || this.state == States.DEMON;
    }

    /**
     * Set the state of the square
     * 
     * @param {States} state 
     */
    setState(state) {
        this.state = state;
    }

}