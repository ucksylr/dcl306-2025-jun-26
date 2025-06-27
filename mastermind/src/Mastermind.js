import React from 'react';
import Container from "./components/common/container";
import Card from "./components/common/card";
import InputText from "./components/common/input-text";
import Button from "./components/common/button";
import Badge from "./components/common/badge";
import ProgressBar from "./components/common/progress-bar";
import Table from "./components/common/table";
import createSecret, {evaluateMove} from "./utils/utility";
/*
   1. Component-Based Programming
   I. Stateful Component
      JavaScript Class
      **JavaScript Function -> React Hook**
   II. Stateless Component
      JavaScript Function

    2. Life-cycle Management
    3. Declarative Programming: Tag
    4. Functional Programming: JS
    5. State Immutability
    6. Model/State --1-way Binding--> View (JS, Tag): ReactDOM ----> Browser's DOM
       **setState**                                  heuristic diff
                                                        keying
       Model/State <------x---------- View / Input Element
       js:          event -> Model

       State Management:
       1. Stateful Component -> Class -> this.state -> Client-side
       2.                                backend sync. -> REST API -> Server-side
       3.

 */
const initialState = {
    level: 3,
    lives: 3,
    tries: 0,
    maxTries: 10,
    timeout: 60,
    timeLimit: 60,
    secret: createSecret(3),
    guess: 123,
    moves: []
};

// Stateful
class Mastermind extends React.PureComponent {
    constructor(props) {
        super(props);
        let storedState = localStorage.getItem("mastermind-game");
        if (storedState) {
            storedState = JSON.parse(storedState);
        } else {
            storedState = initialState;
        }
        this.state = storedState;
        console.log("Mastermind::constructor");
    }

    countDown = () => {
        console.log("Mastermind::countDown");
        let newState = {...this.state};
        newState.timeout--;
        if (newState.timeout <= 0) {
            if (newState.lives === 0) {
                //TODO: Player Loses
            }
            newState.lives--;
            newState.secret = createSecret(newState.level);
            newState.moves = [];
            newState.tries = 0;
            newState.timeout = newState.timeLimit;
        }
        this.setState(newState, () => {
            localStorage.setItem("mastermind-game", JSON.stringify(newState));
        }); // async
        /*
        has no effect, since react reduces all these state changes into a single state change!
        this.setState(newState, () => {
            console.log(this.state, newState);
        }); // async
        this.setState(newState, () => {
            console.log(this.state, newState);
        }); // async
        this.setState(newState, () => {
            console.log(this.state, newState);
        }); // async
         */
    };

    componentDidMount() {
        console.log("Mastermind::componentDidMount");
        this.timerId = window.setInterval(this.countDown, 1_000);
    }

    componentWillUnmount() {
        console.log("Mastermind::componentWillUnmount");
        window.clearInterval(this.timerId);
    }

    play = () => {
        console.log("Mastermind::play");
        let newState = {...this.state};
        newState.tries++;
        if (newState.secret === newState.guess) {
            if (newState.level === 10) {
                //TODO: Player Wins!
            }
            newState.level++;
            newState.lives++;
            newState.tries = 0;
            newState.maxTries += 2;
            newState.timeLimit += 30;
            newState.timeout = newState.timeLimit;
            newState.moves = [];
        } else {
            if (newState.tries === newState.maxTries) {
                if (newState.lives === 0) {
                    //TODO: Game is Over
                }
                newState.lives--;
                newState.moves = [];
                newState.tries = 0;
                newState.timeout = newState.timeLimit;
            }
            newState.moves = [...this.state.moves, evaluateMove({guess: newState.guess, secret: newState.secret})];
        }
        this.setState(newState,()=>{
            localStorage.setItem("mastermind-game", JSON.stringify(newState));
        });
    }

    handleInputChange = (event) => {
        this.setState({
            guess: Number(event.target.value)
        });
    }

    render() { // View -> ReactDOM
        console.log("Mastermind::render");
        return (
            <>
                <br/>
                <Container>
                    <Card title={"Mastermind"}>

                        <InputText label={"Guess"}
                                   value={this.state.guess}
                                   id={"guess"}
                                   handleChange={this.handleInputChange}
                                   explain={"Enter your guess"}/>
                        <Button label={"Play"}
                                click={this.play}
                                color={"btn-success"}/>
                        <Badge value={this.state.level}
                               label={"Level"}
                               color={"bg-primary"}
                               isVisible={true}/>
                        <Badge value={this.state.lives}
                               label={"Lives"}
                               color={"bg-secondary"}
                               isVisible={true}/>
                        <Badge value={`${this.state.tries} out of ${this.state.maxTries}`}
                               label={"Number of moves"}
                               color={"bg-warning"}
                               isVisible={true}/>
                        <Badge value={this.state.timeout}
                               label={"Timeout"}
                               color={"bg-warning"}
                               isVisible={true}/>
                        <ProgressBar value={this.state.timeout}
                                     max={this.state.timeLimit}
                                     min={0}/>
                    </Card>
                    <br/>
                    <Card title={"History"}>
                        <Table fields={["guess", "message"]}
                               values={this.state.moves}
                               headers={["Guess", "Message"]}
                               keyField={"guess"}/>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Mastermind;
