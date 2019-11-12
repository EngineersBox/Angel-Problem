class Utils {

    /**
     * Check if a number is in a range
     * 
     * @param {Number} x 
     * @param {Number} min 
     * @param {Number} max 
     * @returns {Boolean}
     */
    static inRange(x, min, max) {
        return x >= min && x <= max;
    }

    /**
     * Check a position is on the board
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns {Boolean}
     */
    static isValidMove(x, y) {
        return this.inRange(x, 0, COLS) && this.inRange(y, 0, ROWS);
    }

    /**
     * Get DOM element with specified id
     * 
     * @param {String} id 
     * @returns {*}
     */
    static getElem(id) {
        return document.getElementById(id);
    }

    /**
     * Sum arrays element wise
     * 
     * @param {Array} arr1 
     * @param {Array} arr2
     * @returns {Array} 
     */
    static addArrays(a, b) {
        return ab.map((e, i) => e + b[i]);
    }

}