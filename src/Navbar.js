import { auth, SignOut } from "./Auth";

export default function Navbar(props){
    return (<div id="navbar">
        <div>
            <img src={auth.currentUser.photoURL} alt="pp" width="50" height="50"/>
            <p>{auth.currentUser.displayName}</p>
        </div>
        <div>
            <p>Score: {props.score}</p>
            <SignOut/>
        </div>
    </div>)
}