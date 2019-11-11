let COLS;
let ROWS;
let SQUARE_SIZE;

let canvas;
let grid;
let power = 10;

let players;

/**
 * Get DOM element with specified id
 * 
 * @param {String} id 
 * @returns {*}
 */
function getElem(id) {
    return document.getElementById(id);
}

function setup() {
    canvas = createCanvas(COLS * SQUARE_SIZE, ROWS * SQUARE_SIZE);
    canvas.parent("sketch_view");
    grid = new Grid(COLS, ROWS);
    players = {
        P1: new Angel(power),
        P2: new Demon()
    }
    grid.setState(~~(grid.cols / 2), ~~(grid.rows / 2), States.ANGEL);
    grid.setState(players.P2.pos.x, players.P2.pos.y, States.DEMON);
}

function draw() {
    COLS = parseInt(getElem("cols_in").value);
    ROWS = parseInt(getElem("rows_in").value);
    SQUARE_SIZE = parseInt(getElem("sq_width").value);
    power = parseInt(getElem("angel_power"));

    for (let i = 0; i < grid.rows; i++) {
        for (let j = 0; j < grid.cols; j++) {
            stroke(127.5);
            fill(grid.getState(i, j));
            rect(i * SQUARE_WIDTH, j * SQUARE_WIDTH, SQUARE_WIDTH, SQUARE_WIDTH);
        }
    }


}