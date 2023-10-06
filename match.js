const version_1 = require('./shallowpink_v1/lib/chess');
const version_2 = require('./shallowpink_v2/lib/chess');

const ai_1 = require('./shallowpink_v1/lib/ai');
const ai_2 = require('./shallowpink_v2/lib/ai');

let v1 = new version_1();
let v2 = new version_2();
let depth = 3;

// whoever is passed in first plays as white
function match(v1) {
    let currentMoves;
    let turn = 1;
    let fen = v1.toFEN();
    let states = v1.states;
    while(!v1.gameOver && !v2.gameOver) {
        if (turn % 2 !== 0) {
            let v1 = new version_1(fen, states);
            console.log(v1.toString());
            console.log(v1.toFEN());
            let move = ai_1.miniMax(v1, depth);
            console.log(move, '->', v1.move(move)); 
            fen = v1.toFEN();
            states = v1.states;
        }
        else {
            let v2 = new version_2(fen, states);
            console.log(chess.toString());
            console.log(chess.toFEN());
            let move = ai_2.miniMax(v2, depth);
            console.log(move, '->', v2.move(move));
            fen = v2.toFEN();
            states = v2.states;
        }
    }
    console.log(v1.toString());
    console.log(v1.toFEN());
}

match(v1);
