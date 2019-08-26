import React, {PureComponent} from 'react';
import Counter from './Counter';
import Crown from './Crown';



class Player extends PureComponent {
    render(){
        console.log(this.props.name + ' rendered');
        return(
            <div className = "player">
                <button className="remove-player" onClick={()=>this.props.removePlayer(this.props.id)}>✖</button>
                <Crown isHighScore = {this.props.isHighScore}/> 
                <span className="player-name">{this.props.name}</span>
                <Counter 
                    changeScore = {this.props.changeScore}
                    index = {this.props.index}
                    score = {this.props.score}
                />
            </div>
        );
    }
}

export default Player;