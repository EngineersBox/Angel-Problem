/**
 * States enum:
 * - EMPTY
 * - CAPTURED
 * - ANGEL
 */
const States = Object.freeze({
    EMPTY: [127.5],
    CAPTURED: [200],
    ANGEL: [0, 0, 255],
    DEMON: [255, 0, 0]
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

    /**
     * Set the state of the square
     * 
     * @param {States} state 
     */
    setState(state) {
        this.state = state;
    }

}