import Angular from './images/angular.png';
import Vue from './images/vue.png';
import logo from './images/react.png';
import javascript from './images/javascript.png';
import nodejs from './images/nodejs.png';
import css from './images/css.png';

import { useState,useEffect } from 'react';


export default function Ingame(props){

    const [images, setImages] = useState([Angular,Vue,logo,Vue,logo,Angular,javascript,nodejs,css,javascript,nodejs,css]);

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    useEffect(() => {
        setImages(shuffle(images));
    },[])

    const handleClick = e =>{

        if(!e.target.querySelector("img"))return;

        e.target.style.transform = "rotateY(360deg)";
        setTimeout(() => {e.target.querySelector("img").className ="";},300);

        if(!props.searchingPhase){
            props.setSearchingPhase(true);
            props.setPreviousCard(e.target);

        } else {

            props.setSearchingPhase(false);
            props.setPreviousCard(e.target);

            if(e.target.querySelector("img").src === props.previousCard.querySelector("img").src){
                console.log("It matches!");

                setTimeout(() => {
                    e.target.className = "clear";
                    props.previousCard.className = "clear";
                },1000)


            } else {
                console.log("It doesn't match!");

                setTimeout(() => {
                    e.target.style.transform = "rotateY(180deg)";
                    props.previousCard.style.transform = "rotateY(180deg)";
                },1000)
                setTimeout(() => {
                    e.target.querySelector("img").className = "hide";
                    props.previousCard.querySelector("img").className = "hide";
                },1300)

            }
        }
    }


    return (<div id="ingame">
        {images.map(image => <Card image={image} handleClick={handleClick}/>)}
    </div>)
}

function Card(props){
    return (<div onClick={e => props.handleClick(e)}>
        <img src={props.image} alt="Card" width="50" height="50" className="hide"/>
    </div>)
}