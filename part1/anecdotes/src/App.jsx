import {useState} from "react";

import "./App.css";
import Button from "./Button";
import Title from "./Title";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [randomAnecdote, setRandomAnecdote] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleRandomInt = () => {
    setRandomAnecdote(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[randomAnecdote] += 1;
    setVotes(newVotes);
    let highest = mostVoted;
    for (let i = 0; i < newVotes.length; i++) {
      if (newVotes[i] > newVotes[highest]) {
        highest = i;
      }
    }
    setMostVoted(highest);
  };

  return (
    <>
      <Title title="Anecdote of the day" />
      <div>{anecdotes[randomAnecdote]}</div>
      <div>{votes[randomAnecdote]}</div>
      <Button title="next anecdote" onClick={handleRandomInt} />
      <Button title="vote" onClick={handleVote} />
      <Title title="Anecdote with most votes" />
      <div>{anecdotes[mostVoted]}</div>
    </>
  );
};

export default App;
