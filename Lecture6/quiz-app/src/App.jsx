import { useState } from "react";

const questions = [
  {
    question: "Which language is used in React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What are components in React?",
    options: [
      "Data structures for storing information",
      "Reusable building blocks of a user interface",
      "CSS styling rules",
      "JavaScript libraries",
    ],
    answer: "Reusable building blocks of a user interface",
  },
  {
    question: "What is the Virtual DOM?",
    options: [
      "A physical representation of the browser's DOM",
      "A lightweight copy of the real DOM",
      "A way to write HTML in JavaScript",
      "A CSS preprocessor",
    ],
    answer: "A lightweight copy of the real DOM",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-center font-bold text-3xl mb-8">Quiz App </h1>
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              You scored {score} out of {questions.length}
            </h2>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerClick(option)}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-left px-4 py-2 rounded"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
