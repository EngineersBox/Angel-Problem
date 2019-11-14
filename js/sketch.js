let COLS;
let ROWS;
let SQUARE_SIZE;

let canvas;
let grid;
let power;
let showHighlight = true;

const pEnum = {
    angel: 0,
    demon: 1
}
let current_player = pEnum.angel;
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

function playMove(x, y) {
    if (!Utils.isValidMove(x, y)) {
        return;
    }
    let g_state = grid.getState(x, y);
    if (g_state != States.EMPTY) {
        return;
    }
    switch (current_player) {
        case (pEnum.angel):
            let ap = p_angel.power;
            let ax = p_angel.pos.x;
            let ay = p_angel.pos.y;
            if (Utils.inRange(x, ax - ap, ax + ap) && Utils.inRange(y, ay - ap, ay + ap)) {
                grid.setState(ax, ay, States.EMPTY);
                grid.setState(x, y, States.ANGEL);
                p_angel.setPos(x, y);
                current_player = pEnum.demon;
            }
            break;
        case (pEnum.demon):
            grid.setState(p_demon.pos.x, p_demon.pos.y, States.CAPTURED);
            grid.setState(x, y, States.DEMON);
            p_demon.setPos(x, y);
            current_player = pEnum.angel;
            break;
    }
}

function mousePressed() {
    playMove(Utils.snap(mouseX, SQUARE_SIZE), Utils.snap(mouseY, SQUARE_SIZE));
}

function draw() {
    initConst();

    for (let x = 0; x < grid.rows; x++) {
        for (let y = 0; y < grid.cols; y++) {
            stroke(200);
            let ap = p_angel.power;
            let ax = p_angel.pos.x;
            let ay = p_angel.pos.y;
            let g_state = grid.getState(x, y);
            let newColor = color(g_state);
            if (showHighlight && Utils.inRange(x, ax - ap, ax + ap) && Utils.inRange(y, ay - ap, ay + ap)) {
                newColor = g_state == States.DEMON || g_state == States.ANGEL ? newColor : p_angel.highlight;
            }
            fill(newColor);
            rect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        }
    }


}