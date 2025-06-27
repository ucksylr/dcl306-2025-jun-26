import createSecret, {evaluateMove} from "../utils/utility";

function play(game){
    game.tries++;
    if (game.secret === game.guess) {
        if (game.level === 10) {
            game.status = "PLAYER_WINS";
            return;
        }
        game.secret = createSecret(game.level + 1);
        game.level++;
        game.lives++;
        game.tries = 0;
        game.gameConstraints.maxTries += 2;
        game.gameConstraints.timeLimit += 30
        game.counter = game.gameConstraints.timeLimit;
        game.moves= [];
    } else {
        if (game.tries === game.gameConstraints.maxTries) {
            if (game.lives === 0) {
                game.status = "PLAYER_LOSES";
                return;
            }
            game.lives--;
            game.moves = [];
            game.tries = 0;
            game.counter = game.gameConstraints.timeLimit;
        } else {
            game.moves = [...game.moves, evaluateMove({guess: game.guess, secret: game.secret})];
        }
    }
}

let countDown = (game) => {
    game.counter--;
    if (game.counter <= 0) {
        if (game.lives === 0) {
            game.status = "PLAYER_LOSES";
            return;
        }
        game.lives--;
        game.secret = createSecret(game.level);
        game.moves = [];
        game.tries = 0  ;
        game.counter = game.gameConstraints.timeLimit;
    }
};

export default function GameReducer(game, action) {
    const newGame = {...game};
    newGame.gameConstraints = {...game.gameConstraints};
    switch(action.type) {
        case "PLAY":
            play(newGame)
            break;
        case "GUESS_CHANGED":
            newGame.guess = Number(action.value);
            break;
        case "TIME_CLICKED":
            countDown(newGame);
            break;
        default:
            throw new Error("Invalid action type");
    }
    return newGame;
}
