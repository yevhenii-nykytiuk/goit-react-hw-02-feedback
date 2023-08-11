import React, {Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  clickBtnFeedback = ({target: {id}}) => {
    this.setState(prevState => ({
      [id]: prevState[id] + 1
    }))
  }

  countTotalFeedback = () => {
    // const {good, neutral, bad} = this.state;
    // return good + neutral + bad;
    return Object.values(this.state).reduce((acc, total) => (acc += total));
  }

  countPositiveFeedbackPercentage(){
    const {good} = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  

  render () {
    const {good, neutral, bad} = this.state;
    const option = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    

    return (
      <>

      <Section title="Please leave feedback">
        <FeedbackOptions options={option} onLeaveFeedback={this.clickBtnFeedback}/>
      </Section>

      <Section title="Statistics"> 
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
      </Section>
       

      </>
    );
  }
};

// total={} positivePercentage={}
