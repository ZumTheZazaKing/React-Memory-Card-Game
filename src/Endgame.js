import { SignOut } from "./Auth";
import firebase from './firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRef } from "react";

const firestore = firebase.firestore();

export function Endgame(props){

    const leadersRef = firestore.collection("leaderboard");
    const query = leadersRef.orderBy("time").limit(10);
    const [leaders] = useCollectionData(query);

    const leaderboardRef = useRef();
    const basicsRef = useRef();

    function showLeaderboard(){
        leaderboardRef.current.className = "";
        basicsRef.current.className = "hide";
    }

    function hideLeaderboard(){
        leaderboardRef.current.className = "hide";
        basicsRef.current.className = "";
    }

    function Leader(props){
        return <tr>
            <td id="image"><img src={props.photoURL} alt="pp" width="30" height="30"/></td>
            <td>{props.name}</td>
            <td>{props.time}</td>
        </tr>
    }

    return (<div id="Endgame" className="hide" ref={props.endgameRef}>
        <div id="EndgameContent">
            <div id="basic" ref={basicsRef}>
                <p id="message">{props.endgameMessage}</p>
                <p>Time Taken: {props.recordTime}s</p>
                <br/>
                <button id="playAgain" onClick={e => props.playAgain()}>Play Again</button>
                <br/><br/>
                <button id="board" onClick={e => showLeaderboard()}>Leaderboard</button>
                <br/><br/>
                <SignOut/>
            </div>
            <div id="leaderboard" className="hide" ref={leaderboardRef}>
                <button id="back" onClick={e => hideLeaderboard()}>Back</button>
                <br/><br/>
                <table>
                    <tr>
                        <th id="header" colSpan="2">Player</th>
                        <th id="timeHeader">Time</th>
                    </tr>
                    {leaders && leaders.map(leader => <Leader photoURL={leader.photoURL} name={leader.name} time={leader.time}/>)}
                </table>
            </div>
        </div>
    </div>)
}