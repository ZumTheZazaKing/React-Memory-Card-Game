import firebase from './firebase';
export const auth = firebase.auth();

export function SignIn(){
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  
    return (<div id="SignIn">
        <h2>Memory Card Game</h2>
        <p>How fast can you find the matching cards?</p>
        <p>Once you sign in, it's straight into the field!</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>)
}
  
export function SignOut(){
    return auth.currentUser && (<div>
      <button id="signOut" onClick={() => auth.signOut()}>Sign Out</button>
    </div>)
}