import './App.css';
import { useState, useRef } from 'react';

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

  let [lives, setLives] = useState(8);
  let [time, setTime] = useState(0);
  let [score, setScore] = useState(0);
  let [searchingPhase, setSearchingPhase] = useState(false);
  let [previousCard, setPreviousCard] = useState("");
  let [endgameMessage, setEndgameMessage] = useState("");
  let [recordTime, setRecordTime] = useState(0);

  let endgameRef = useRef();

  function playAgain(){
    setLives(8);
    setTime(0);
    setScore(0);
    setSearchingPhase(false);
    setPreviousCard("");
    setEndgameMessage("");
    setRecordTime(0);

    endgameRef.current.className = "hide"
  }

  return (<div>
    <Navbar time={time} lives={lives}/>

    <Ingame 
    searchingPhase={searchingPhase}
    lives={lives}
    setLives={setLives} 
    previousCard={previousCard}
    setSearchingPhase={setSearchingPhase}
    setPreviousCard={setPreviousCard}
    score={score}
    setScore={setScore}
    endgameRef={endgameRef}
    setEndgameMessage={setEndgameMessage}
    time={time}
    setTime={setTime}
    setRecordTime={setRecordTime}
    />

    <Endgame recordTime={recordTime} endgameRef={endgameRef} endgameMessage={endgameMessage}/>
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
