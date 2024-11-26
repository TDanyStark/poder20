import { questionnaire } from "../data/data";
import { useState } from "react";

const GamePoder = () => {
  const [questions, setQuestions] = useState(questionnaire);
  return (
    <section className="max-w-7xl mx-auto px-4 pb-4 md:px-8 md:pb-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {questions.map((question) => (
          <article
            key={question.id}
            className="bg-white shadow-lg rounded-lg p-4"
          >
            <h2 className="text-lg font-bold mb-2">{question.question}</h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Verdadero
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Falso
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GamePoder;
