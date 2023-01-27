import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);
  const optionsName = ['Good', 'Neutral', 'Bad'];

  const countFeedbacks = type => {
    switch (type) {
      case 'Good':
        setGood(state => state + 1);
        break;

      case 'Neutral':
        setNeutral(state => state + 1);
        break;

      case 'Bad':
        setBad(state => state + 1);
        break;

      default:
        console.log('Something went wrong');
        break;
    }
  };

  const countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };
  const countPositiveFeedbackPercentage = (a, b, c) => {
    const total = a + b + c;
    if (total === 0) {
      return 0;
    }

    return `${Math.round((a * 100) / total)}%`;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        backgroundColor: '#dee4e7',
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsName}
          onLeaveFeedback={countFeedbacks}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {Good === 0 && Neutral === 0 && Bad === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={countTotalFeedback(Good, Neutral, Bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              Good,
              Neutral,
              Bad
            )}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};
