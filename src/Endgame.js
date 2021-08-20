import { SignOut } from "./Auth";

export function Endgame(props){
    return (<div id="Endgame" className="hide">
        <div id="EndgameContent">
            <p>You won!</p>
            <p>Time Taken: {props.time}s</p>
            <br/>
            <button id="playAgain">Play Again</button>
            <br/><br/>
            <SignOut/>
        </div>
    </div>)
}