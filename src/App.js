import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import firebase from './firebase';
import 'firebase/auth';
import 'firebase/firestore';

import {useAuthState} from 'react-firebase-hooks/auth';

import { SignIn, auth } from './Auth';
import Navbar from './Navbar';

const firestore = firebase.firestore();

function Main(){

  let [score, setScore] = useState(0);

  return (<div>
    <Navbar score={score}/>
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
