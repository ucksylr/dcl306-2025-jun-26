import Container from "./common/container";
import Card from "./common/card";
import {Link} from "react-router";

export default function PlayerWins(){
    return(
        <Container>
            <Card title={"Game Console"}>
                 <h1>Good game!</h1>
                <Link to={"/"}>Play again?</Link>
            </Card>
        </Container>
    )
}
