import Angular from './images/angular.png';
import Vue from './images/vue.png';
import logo from './images/react.png';
import javascript from './images/javascript.png';
import nodejs from './images/nodejs.png';
import css from './images/css.png';

export default function Ingame(){

    const images = [
        Angular,
        Vue,
        logo,
        Vue,
        logo,
        Angular,
        javascript,
        nodejs,
        css,
        javascript,
        nodejs,
        css
    ];

    let currentIndex = images.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }

    function Card(props){
        return (<div>
            <img src={props.image} alt="Card" width="50" height="50"/>
        </div>)
    }

    return (<div id="ingame">
        {images.map(image => <Card image={image}/>)}
    </div>)
}