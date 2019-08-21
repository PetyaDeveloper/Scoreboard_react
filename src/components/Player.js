import React from 'react';
import Counter from './Counter';



const Player = (props)=>{
    return(
        <div className = "player">
            <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>✖</button>
            <span className="player-name">{props.name}</span>
            <Counter 
                changeScore = {props.changeScore}
                index = {props.index}
                score = {props.score}
            />
        </div>
    );
}

export default Player;