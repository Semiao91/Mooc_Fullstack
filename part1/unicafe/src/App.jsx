import {useState} from "react";
import Title from "./Title";
import Button from "./Button";
import List from "./List";
import "./App.css";

import React from "react";

export const Statistics = (props) => {
  return (
    <>
      <Title title="statistics" />
      <div>
        <List name="good" value={props.good} />
        <List name="neutral" value={props.neutral} />
        <List name="bad" value={props.bad} />
        <List name="all" value={props.all} />
        <List name="average" value={props.average} />
        <List name="positive" value={props.positiveAverage} symbol="%" />
      </div>
    </>
  );
};

const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [sum, setSum] = useState(0);
  const [positiveSum, setPositiveSum] = useState(0);

  const handleCickGood = () => {
    setgood(good + 1);
    setAll(all + 1);
    setSum(sum + 1);
    setPositiveSum(positiveSum + 1);
  };

  const handleCickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleCickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setSum(sum - 1);
  };
  return (
    <>
      <Title title="give feedback" />
      <div>
        <Button title="good" onClick={handleCickGood} />
        <Button title="neutral" onClick={handleCickNeutral} />
        <Button title="bad" onClick={handleCickBad} />
      </div>
      {all === 0 ? (
        <>
          <Title title="statistics" />
          <p>No feedback given</p>
        </>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={sum === 0 ? sum : sum / all}
          positiveAverage={sum === 0 ? sum : (positiveSum / all) * 100}
        />
      )}
    </>
  );
};

export default App;
