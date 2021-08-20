import './App.css';
import { useState } from 'react';

import firebase from './firebase';
import 'firebase/auth';
import 'firebase/firestore';

import {useAuthState} from 'react-firebase-hooks/auth';

import { SignIn, auth } from './Auth';
import Navbar from './Navbar';
import Ingame from './Ingame';
import { Endgame } from './Endgame';

const firestore = firebase.firestore();

function Main(){

  let [lives, setLives] = useState(5);
  let [time, setTime] = useState(0);
  let [searchingPhase, setSearchingPhase] = useState(false);
  let [previousCard, setPreviousCard] = useState("");

  return (<div>
    <Navbar time={time} lives={lives}/>

    <Ingame 
    searchingPhase={searchingPhase} 
    setLives={setLives} 
    previousCard={previousCard}
    setSearchingPhase={setSearchingPhase}
    setPreviousCard={setPreviousCard}
    />

    <Endgame time={time}/>
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
