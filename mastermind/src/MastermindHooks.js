import Container from "./components/common/container";
import Card from "./components/common/card";
import InputText from "./components/common/input-text";
import Button from "./components/common/button";
import Badge from "./components/common/badge";
import ProgressBar from "./components/common/progress-bar";
import Table from "./components/common/table";
import React, {useEffect, useState} from "react";
import createSecret, {evaluateMove} from "./utils/utility";
// stateful component
export default function MastermindHooks() {
    console.log("MastermindHooks::render");
    const [level, setLevel] = useState(3);
    const [lives, setLives] = useState(3);
    const [tries, setTries] = useState(0);
    const [counter, setCounter] = useState(60);
    const [gameConstraints, setGameConstraints] = useState({
        maxTries: 10,
        timeLimit: 60
    });
    const [secret, setSecret] = useState(createSecret(3));
    const [guess, setGuess] = useState(123);
    const [moves, setMoves] = useState([]);

    const play = () => {
        console.log("MastermindHooks::play");
        // setTries( n => n + 1);
        setTries(tries + 1);
        if (secret === guess) {
            if (level === 10) {
                //TODO: Player Wins!
            }
            setLevel(level + 1);
            setLives(lives + 1);
            setTries(0);
            setGameConstraints({
                maxTries: gameConstraints.maxTries + 2,
                timeLimit: gameConstraints.timeLimit + 30
            });
            setCounter(gameConstraints.timeLimit);
            setMoves([]);
        } else {
            if (tries === gameConstraints.maxTries) {
                if (lives === 0) {
                    //TODO: Game is Over
                }
                setLives(lives - 1);
                setMoves([]);
                setTries(0);
                setCounter(gameConstraints.timeLimit);
            }
            setMoves([...moves, evaluateMove({guess, secret})]);
        }
        //TODO: localStorage.setItem("mastermind-game", JSON.stringify(newState));
    }
    const handleInputChange = (event) => {
        setGuess(Number(event.target.value));
    }
    let countDown = () => {
        console.log("MastermindHooks::countDown");
        setCounter(counter - 1);
        if (counter <= 0) {
            if (lives === 0) {
                //TODO: Player Loses
            }
            setLives(lives - 1);
            setSecret(createSecret(level));
            setMoves([]);
            setTries(0);
            setCounter(gameConstraints.timeLimit);
        }
    };

    useEffect(() => {
        console.log("Mastermind::componentDidMount");
        let timerId = window.setInterval(countDown, 1_000);
        return () => {
            console.log("Mastermind::componentWillUnmount");
            window.clearInterval(timerId);
        }
    }, [counter]);

    return (
        <>
            <br/>
            <Container>
                <Card title={"Mastermind"}>

                    <InputText label={"Guess"}
                               value={guess}
                               id={"guess"}
                               handleChange={handleInputChange}
                               explain={"Enter your guess"}/>
                    <Button label={"Play"}
                            click={play}
                            color={"btn-success"}/>
                    <Badge value={level}
                           label={"Level"}
                           color={"bg-primary"}
                           isVisible={true}/>
                    <Badge value={lives}
                           label={"Lives"}
                           color={"bg-secondary"}
                           isVisible={true}/>
                    <Badge value={`${tries} out of ${gameConstraints.maxTries}`}
                           label={"Number of moves"}
                           color={"bg-warning"}
                           isVisible={true}/>
                    <Badge value={counter}
                           label={"Timeout"}
                           color={"bg-warning"}
                           isVisible={true}/>
                    <ProgressBar value={counter}
                                 max={gameConstraints.timeLimit}
                                 min={0}/>
                </Card>
                <br/>
                <Card title={"History"}>
                    <Table fields={["guess", "message"]}
                           values={moves}
                           headers={["Guess", "Message"]}
                           keyField={"guess"}/>
                </Card>
            </Container>
        </>
    );
}
