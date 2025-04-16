import React, { useState } from 'react';

const questions = [
  {
    question: "What was a primary motivation behind the creation of Bitcoin?",
    options: [
      "To increase banking efficiency",
      "To enable government surveillance",
      "To solve the double-spend problem without a central authority",
      "To create a universal identity system"
    ],
    answer: 2
  },
  {
    question: "Which of the following technologies is not foundational to Distributed Ledger Technology (DLT)?",
    options: [
      "Hashing",
      "Asymmetric key cryptography",
      "Agreement protocols",
      "Centralized database systems"
    ],
    answer: 3
  },
  {
    question: "What mechanism does Bitcoin use to validate and secure blocks?",
    options: [
      "Proof of Identity (PoI)",
      "Proof of Stake (PoS)",
      "Proof of Work (PoW)",
      "Proof of Authority (PoA)"
    ],
    answer: 2
  },
  {
    question: "What is a key feature of permission-less blockchains like Bitcoin?",
    options: [
      "Centralized decision making",
      "Only selected participants can validate transactions",
      "Anyone can join and participate in validation",
      "Government-issued authority is required to participate"
    ],
    answer: 2
  },
  {
    question: "Who is credited with introducing Bitcoin in a 2008 white paper?",
    options: [
      "Gavin Andresen",
      "Peter McBurney",
      "Jeremy Wilson",
      "Satoshi Nakamoto"
    ],
    answer: 3
  },
  {
    question: "What is the function of a wallet in the Bitcoin network?",
    options: [
      "It stores passwords",
      "It manages identity information",
      "It holds public and private keys representing ownership of bitcoins",
      "It tracks user spending habits"
    ],
    answer: 2
  },
  {
    question: "What is the main purpose of the chaining of blocks in a blockchain?",
    options: [
      "To enable faster network speeds",
      "To compress transaction sizes",
      "To ensure immutability of transaction history",
      "To generate random rewards"
    ],
    answer: 2
  },
  {
    question: "What concept describes the stateful property of distributed ledgers?",
    options: [
      "They delete old transactions after processing",
      "They store and update shared state across all nodes",
      "They rely on centralized version control",
      "They ignore previous transaction history"
    ],
    answer: 1
  },
  {
    question: "Smart contracts are best described as:",
    options: [
      "Legal agreements between governments",
      "Automated processes executed upon trigger conditions",
      "Artificial intelligence agents",
      "Data encryption algorithms"
    ],
    answer: 1
  },
  {
    question: "According to the slides, what is a major challenge in implementing distributed ledger systems?",
    options: [
      "Lack of funding",
      "Poor public interest",
      "Integration with legacy systems and user-friendly interfaces",
      "Too many users"
    ],
    answer: 2
  }
];

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Blockchain & Bitcoin Quiz</h1>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '1rem' }}>
          <p><strong>{i + 1}. {q.question}</strong></p>
          <div style={{ marginTop: '0.5rem' }}>
            {q.options.map((opt, j) => (
              <label key={j} style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input
                  type="radio"
                  name={`question-${i}`}
                  checked={userAnswers[i] === j}
                  onChange={() => handleOptionChange(i, j)}
                  disabled={submitted}
                  style={{ marginRight: '0.5rem' }}
                />
                {opt}
              </label>
            ))}
          </div>
          {submitted && (
            <p style={{ marginTop: '0.5rem', fontWeight: '500', color: userAnswers[i] === q.answer ? 'green' : 'red' }}>
              {userAnswers[i] === q.answer ? 'Correct!' : `Incorrect. Correct answer: ${q.options[q.answer]}`}
            </p>
          )}
        </div>
      ))}
      {!submitted ? (
        <button onClick={handleSubmit} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '9999px', border: 'none' }}>
          Submit
        </button>
      ) : (
        <p style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '1rem' }}>
          You got {userAnswers.filter((ans, i) => ans === questions[i].answer).length} out of {questions.length} correct.
        </p>
      )}
    </div>
  );
}
