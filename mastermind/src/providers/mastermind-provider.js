import createSecret from "../utils/utility";
import React, {useReducer} from "react";
import MastermindStateless from "../MastermindStateless";
import GameReducer from "../reducers/game-reducer";

const initialGameState = {
    level: 3,
    lives: 3,
    tries: 0,
    status: "PLAYING",
    gameConstraints: {
        maxTries: 10,
        timeLimit: 60
    },
    counter: 60,
    secret: createSecret(3),
    guess: 123,
    moves: []
};
export const GameContext = React.createContext(initialGameState);

export default function MastermindProvider(){
    const [game,dispatchGame] = useReducer(GameReducer,initialGameState);
    return(
        <GameContext.Provider value={{game,dispatchGame}}>
            <MastermindStateless></MastermindStateless>
        </GameContext.Provider>
    );
}
