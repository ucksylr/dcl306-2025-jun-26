import Container from "./components/common/container";
import Card from "./components/common/card";
import InputText from "./components/common/input-text";
import Button from "./components/common/button";
import Badge from "./components/common/badge";
import ProgressBar from "./components/common/progress-bar";
import Table from "./components/common/table";
import React, {useContext, useEffect} from "react";
import {GameContext} from "./providers/mastermind-provider";
import {useNavigate} from "react-router";

export default function MastermindStateless() {
    const {game, dispatchGame} = useContext(GameContext);
    const navigate = useNavigate();

    const play = (event) => {
        // js event -> action
        dispatchGame({type: "PLAY",event});
    }

    const handleInputChange = (event) => {
        dispatchGame({type: "GUESS_CHANGED", value: event.target.value});
    }

    useEffect(() => {
        let timerId = setInterval(()=>dispatchGame({type: "TIME_CLICKED"}), 1_000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    useEffect(() => {
        if (game.status === "PLAYER_WINS") {
            navigate("/wins");
        }
        if (game.status === "PLAYER_LOSES") {
            navigate("/loses");
        }
    });

    return( // View
        <>
            <br/>
            <Container>
                <Card title={"Mastermind"}>

                    <InputText label={"Guess"}
                               value={game.guess}
                               id={"guess"}
                               handleChange={handleInputChange}
                               explain={"Enter your guess"}/>
                    <Button label={"Play"}
                            click={play}
                            color={"btn-success"}/>
                    <Badge value={game.level}
                           label={"Level"}
                           color={"bg-primary"}
                           isVisible={true}/>
                    <Badge value={game.lives}
                           label={"Lives"}
                           color={"bg-secondary"}
                           isVisible={true}/>
                    <Badge value={`${game.tries} out of ${game.gameConstraints.maxTries}`}
                           label={"Number of moves"}
                           color={"bg-warning"}
                           isVisible={true}/>
                    <Badge value={game.counter}
                           label={"Timeout"}
                           color={"bg-warning"}
                           isVisible={true}/>
                    <ProgressBar value={game.counter}
                                 max={game.gameConstraints.timeLimit}
                                 min={0}/>
                </Card>
                <br/>
                <Card title={"History"}>
                    <Table fields={["guess", "message"]}
                           values={game.moves}
                           headers={["Guess", "Message"]}
                           keyField={"guess"}/>
                </Card>
            </Container>
        </>
    );
}
