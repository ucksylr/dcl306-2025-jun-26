import React from 'react';
import Container from "./components/common/Container";
import Card from "./components/common/Card";
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
 */

// Stateful
class Mastermind extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            level: 3,
            lives: 3,
            tries: 0,
            maxTries: 10,
            timeout: 60,
            secret: 549,
            guess: 123,
            moves: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            let newState = {...this.state};
            newState.timeout--;
            this.setState(newState,()=>{
              console.log(newState.timeout,this.state.timeout);
            }); // async
        },1_000)
    }

    render(){ // View -> ReactDOM
        return (
            <>
                <br/>
                <Container>
                    <Card title="Mastermind">
                        <span>{this.state.timeout}</span>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Mastermind;
