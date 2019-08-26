import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import './App.css';

class App extends Component {
  state={
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
  ]
  }
handleRemovePlayer=(id)=>{
  this.setState(prevState=>{
    return{
      players: prevState.players.filter(p=>p.id!==id)
    };
  });
};
// this is for increment and decrement score on the Player, Counter
handleScoreChange=(index,delta)=>{
  this.setState(prevState=>({
    score: prevState.players[index].score += delta
  }));
}
handleAddPlayer=(name)=>{
  this.setState(prevState=>{
    return{
      players: [
        ...prevState.players,
        {name,
        score: 0,
      id: this.prevPlayerId += 1}
      ]
    };
  });
}
// icon crown: 
getHighScore =()=>{
  const scores = this.state.players.map(p => p.score);
  const highScore = Math.max(...scores);
  if(highScore){
    return highScore;
  }
  return null;
}

//players in counter
prevPlayerId = 4;

  render(){
    const highScore = this.getHighScore();
    return (
      <div className ="scoreboard">
       <Header 
            title = "Stupid Scoreboard"  
            totalPlayers={this.state.players.length}
            players={this.state.players} />
       {/* players list */}
       {this.state.players.map((pl,index)=>
        <Player 
          name={pl.name}
          score={pl.score}
          key={pl.id.toString()}
          id={pl.id}
          index = {index}
          changeScore={this.handleScoreChange}
          removePlayer={this.handleRemovePlayer}
          isHighScore = {highScore === pl.score}
        />
       )}
       <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div> 
    );
  }
}

export default App;
