import React, {Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  }

  goodCountBtn = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }))
  }

  neutralCountBtn = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }))
  }

  badCountBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }))
  }

  totalSum = () => {
    this.setState(prevState => ({
      total: prevState.total + prevState.good,
    }))
  }


  render () {
    const {good, neutral, bad, total} = this.state;

    return (
      <>

      <FeedbackOptions goodCountBtn={this.goodCountBtn} neutralCountBtn={this.neutralCountBtn} badCountBtn={this.badCountBtn} totalSum={this.totalSum}/>

      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>

      </>
    );
  }
};
