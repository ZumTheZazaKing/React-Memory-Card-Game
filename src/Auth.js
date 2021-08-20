import firebase from './firebase';
export const auth = firebase.auth();

export function SignIn(){
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  
    return (<div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>)
}
  
export function SignOut(){
    return auth.currentUser && (<div>
      <button id="signOut" onClick={() => auth.signOut()}>Sign Out</button>
    </div>)
}