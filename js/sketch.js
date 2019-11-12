let COLS;
let ROWS;
let SQUARE_SIZE;

let canvas;
let grid;
let power;
let showHighlight = true;

let p_angel;
let p_demon;

function initConst() {
    COLS = parseInt(Utils.getElem("cols_in").value);
    ROWS = parseInt(Utils.getElem("rows_in").value);
    SQUARE_SIZE = parseInt(Utils.getElem("sq_width").value);
    power = parseInt(Utils.getElem("angel_power").value);
    showHighlight = Boolean(Utils.getElem("highlight").checked);
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

function angelMove(x, y) {
    if (Utils.isValidMove(x, y)) {
        let ap = p_angel.power;
        let ax = p_angel.pos.x;
        let ay = p_angel.pos.y;
        let g_state = grid.getState(x, y);
        if (Utils.inRange(x, ax - ap, ax + ap) && Utils.inRange(y, ay - ap, ay + ap) && (g_state == States.EMPTY)) {
            grid.setState(ax, ay, States.EMPTY);
            grid.setState(x, y, States.ANGEL);
            p_angel.setPos(x, y);
            return true;
        }
    }
    return false;
}

function demonMove(x, y) {
    if (Utils.isValidMove(x, y)) {
        let g_state = grid.getState(x, y);
        if (g_state == States.EMPTY) {
            grid.setState(p_demon.pos.x, p_demon.pos.y, States.CAPTURED);
            grid.setState(x, y, States.DEMON);
            p_demon.setPos(x, y);
            return true;
        }
    }
    return false;
}

function draw() {
    initConst();

    for (let i = 0; i < grid.rows; i++) {
        for (let j = 0; j < grid.cols; j++) {
            stroke(200);
            let ap = p_angel.power;
            let ax = p_angel.pos.x;
            let ay = p_angel.pos.y;
            let g_state = grid.getState(j, i);
            let newColor = color(g_state);
            if (showHighlight && Utils.inRange(j, ax - ap, ax + ap) && Utils.inRange(i, ay - ap, ay + ap)) {
                newColor = g_state == States.DEMON || g_state == States.ANGEL ? newColor : p_angel.highlight;
            }
            fill(newColor);
            rect(i * SQUARE_SIZE, j * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        }
    }


}