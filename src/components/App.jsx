import React, {Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions, Section } from "./FeedbackOptions/FeedbackOptions";



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countClickFeedback = (id) => {
    this.setState((prevState) => {
      return {[id]: prevState[id] + 1}
    })
  }

  // countTotalFeedback = () => {

  // }
  

  render () {
    const {good, neutral, bad} = this.state;
    const option = Object.keys(this.state);
    
    

    return (
      <>

      <Section title="Please leave feedback"/>

      <FeedbackOptions options={option} onLeaveFeedback={this.countClickFeedback}/>
      
      <Statistics good={good} neutral={neutral} bad={bad} /> 

      </>
    );
  }
};

// total={} positivePercentage={}
