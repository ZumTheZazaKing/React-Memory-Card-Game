import { SignOut } from "./Auth";

export function Endgame(props){
    return (<div id="Endgame" className="hide" ref={props.endgameRef}>
        <div id="EndgameContent">
            <p id="message">{props.endgameMessage}</p>
            <p>Time Taken: {props.recordTime}s</p>
            <br/>
            <button id="playAgain">Play Again</button>
            <br/><br/>
            <SignOut/>
        </div>
    </div>)
}