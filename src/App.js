import { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Section from './Components/Section/Section';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  increaseFeedback = event => {
    this.setState(prevState => ({
      [event.target.textContent]: prevState[event.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else
      return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.increaseFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
