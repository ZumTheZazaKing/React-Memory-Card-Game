import { SignOut } from "./Auth";

export function Endgame(){
    return (<div id="Endgame" className="hide">
        <div id="EndgameContent">
            <p>You won!</p>
            <br/>
            <button id="playAgain">Play Again</button>
            <br/><br/>
            <SignOut/>
        </div>
    </div>)
}