import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleButtonClick = () => {
    if (question) {
      const randomIndex = Math.floor(Math.random() * answers.length);
      setResult(answers[randomIndex]);
      setShowAnswer(true);
    }
  };

  return (
    <div className="background">
      <h1 className="title">Magic 8 Ball</h1>
      <div className="container">
        <label htmlFor="question">Ask a question:</label>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          id="question"
        />
        <button onClick={handleButtonClick}>Shake</button>
        {showAnswer && question && (
          <p id="result">Magic 8 Ball says: {result}</p>
        )}
      </div>
    </div>
  );
}




