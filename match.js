const version_1 = require('./shallowpink_v1/lib/chess');
const version_2 = require('./shallowpink_v2/lib/chess');

const ai_1 = require('./shallowpink_v1/lib/ai');
const ai_2 = require('./shallowpink_v2/lib/ai');
const { GAMEOVER } = require('./shallowpink_v1/lib/status');

let v1 = new version_1();
let v2 = new version_2();
let depth = 2;

function match(v1, v2) {
    let turn = 1;
    let fen = v1.toFEN();
    let states = v1.states;
    let GAMEOVER = false;

    while(!GAMEOVER) {
        if (turn % 2 !== 0) {
            let v1 = new version_1(fen, states);
            console.log(v1.toString());
            console.log(v1.toFEN());
            console.log(v1.legalMoves());
            let move = ai_1.miniMax(v1, depth);
            console.log(move, '->', v1.move(move)); 
            fen = v1.toFEN();
            states = v1.states;
            if (v1.gameOver) {
                console.log(v1.toString());
                console.log(v1.toFEN());      
                GAMEOVER = true;
            }
        }
        else {
            let v2 = new version_2(fen, states);
            console.log(chess.toString());
            console.log(chess.toFEN());
            console.log(v2.legalMoves());
            let move = ai_2.miniMax(v2, depth);
            console.log(move, '->', v2.move(move));
            fen = v2.toFEN();
            states = v2.states;
            if (v2.gameOver) {
                console.log(v2.toString());
                console.log(v2.toFEN());      
                GAMEOVER = true;
            }
        }
    }
}

match(v1, v2);


