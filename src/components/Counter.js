import React from 'react';

// class Counter extends React.Component {
//   state={
//       score: 100
//   }
//   //   incrementScore=()=>{
// //       this.setState({
// //         score: this.state.score +15
// //       });
// //   }
// // incrementScore=()=>{
// //     this.setState(prevState=>({
// //        score: prevState.score + 15
// //     }));
// // }
// // decrementScore=()=>{
// //     this.setState(prevState=>({
// //        score: prevState.score - 15
// //     }));
// // }

const Counter = (props) => {
let index= props.index;

        return(
            <div className = "counter">
                <button className = "counter-action decrement" onClick={()=>props.changeScore(index,-15)} >-</button>
                {/* // we r missing the span info */}
                <span className = "counter-score">{props.score}</span>
                <button className = "counter-action increment" onClick={()=>props.changeScore(index,15)}>+</button>
            </div>
        );
}

export default Counter;