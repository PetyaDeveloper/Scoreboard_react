import React from 'react';

const Stats = (props) =>{
    // const totalPlayers=props.players.length;
     const totalPoints = props.players.reduce((acc,pl) => {
       return acc + pl.score;
     },0);

    return (
        <table className="stats">
        <tbody>
          <tr>
            <td>totalPlayers: </td>
            <td>{props.players.length}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    );
}
export default Stats;