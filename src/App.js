import logo from './logo.svg';
import './App.css';

import firebase from './firebase';
import 'firebase/auth';
import 'firebase/firestore';

import {useAuthState} from 'react-firebase-hooks/auth';

import { SignIn, SignOut, auth } from './Auth';

const firestore = firebase.firestore();

function Main(){
  return (<div>
    <h1>Main</h1>
    <SignOut/>
  </div>)
}



function App() {
  let [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Main/> : <SignIn/>}
    </div>
  );
}

export default App;
