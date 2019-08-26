import React from 'react';
import PropTypes from 'prop-types';

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

const Counter = ({changeScore, score, index}) => {
//let index= props.index;

        return(
            <div className = "counter">
                <button className = "counter-action decrement" onClick={()=>changeScore(index,-15)} >-</button>
                {/* // we r missing the span info */}
                <span className = "counter-score">{score}</span>
                <button className = "counter-action increment" onClick={()=>changeScore(index,15)}>+</button>
            </div>
        );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};
Counter.defaultProps = {
  score: 0
};

export default Counter;