import { auth, SignOut } from "./Auth";

export default function Navbar(props){
    return (<div id="navbar">
        <div>
            <img src={auth.currentUser.photoURL} alt="pp" width="40" height="40"/>
            <p>{auth.currentUser.displayName}</p>
        </div>
        <div>
            <p>Time: {props.time}s</p>
            <p>Lives: {props.lives}</p>
        </div> 
        <SignOut/>
    </div>)
}