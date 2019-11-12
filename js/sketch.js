let COLS;
let ROWS;
let SQUARE_SIZE;

let canvas;
let grid;
let power;

let p_angel;
let p_demon;

/**
 * Get DOM element with specified id
 * 
 * @param {String} id 
 * @returns {*}
 */
function getElem(id) {
    return document.getElementById(id);
}

function initConst() {
    COLS = parseInt(getElem("cols_in").value);
    ROWS = parseInt(getElem("rows_in").value);
    SQUARE_SIZE = parseInt(getElem("sq_width").value);
    power = parseInt(getElem("angel_power").value);
}

function setup() {
    initConst();
    canvas = createCanvas(COLS * SQUARE_SIZE, ROWS * SQUARE_SIZE);
    canvas.parent("sketch_view");

    grid = new Grid(COLS, ROWS);
    p_angel = new Angel(power, ~~(grid.cols / 2), ~~(grid.rows / 2));
    p_demon = new Demon();

    grid.setState(p_angel.pos.x, p_angel.pos.y, States.ANGEL);
    grid.setState(p_demon.pos.x, p_demon.pos.y, States.DEMON);
}

function draw() {
    initConst();

    for (let i = 0; i < grid.rows; i++) {
        for (let j = 0; j < grid.cols; j++) {
            stroke(200);
            fill(color(grid.getState(i, j)));
            rect(i * SQUARE_SIZE, j * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        }
    }


}