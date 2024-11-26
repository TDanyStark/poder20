import { questionnaire } from "../data/data";
import { useEffect, useState } from "react";
import "./GamePoder.css";
import Modal from "./Modal";

const GamePoder = () => {
  const [questions, setQuestions] = useState(questionnaire);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickArticle = (id: string) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          isActive: true,
        };
      }
      return {
        ...question,
        isActive: false,
      };
    });
    setQuestions(updatedQuestions);
  };

  const handleresponse = (e: React.MouseEvent<HTMLButtonElement>, id: string, response: boolean) => {
    // prevenir el click en los padres
    e.stopPropagation();
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        console.log({
          ...question,
          isAnswered: true,
        });
        return {
          ...question,
          isAnswered: true,
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);

    const question = updatedQuestions.find((question) => question.id === id);
    if (question) {
      if (question.correctAnswer === response) {
        setTitle("¡Correcto! ¡Has acertado!");
        setMessage("🎉");
      } else {
        setTitle("¡Incorrecto! ¡Inténtalo de nuevo!");
        setMessage("😔");
      }
      setIsModalOpen(true);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 pb-4 md:px-8 md:pb-8 font-brandon">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
          {questions.map((question) => (
            <article
              key={question.id}
              className="flip-card text-white rounded-lg cursor-pointer"
              onClick={() => handleClickArticle(question.id)}
            >
              <div
                className={`flip-card-container ${question.isActive || question.isAnswered ? "active" : "noActive"}`}
              >
                <div className="bg-rosado-wh-abbott front p-20 grid place-content-center">
                  <h2 className="text-9xl font-bold">{question.id}</h2>
                </div>
                <div className="bg-rosado-wh-abbott back p-4 flex flex-col justify-between gap-2">
                  <div className="flex-1 grid place-content-center">
                    <h3 className="text-3xl text-pretty">
                      {question.question}
                    </h3>
                  </div>
                  <div className="options text-3xl space-x-4">
                    <button className="bg-morado-wh-abbott text-white px-4 py-2 rounded-full"
                      onClick={(e) => handleresponse(e, question.id, true)}
                    >
                      Verdadero
                    </button>
                    <button className="bg-white text-morado-wh-abbott px-4 py-2 rounded-full"
                      onClick={(e) => handleresponse(e, question.id, false)}
                    >
                      Falso
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {
        isModalOpen && <Modal title={title} message={message} closeModal={closeModal} />
      }
    </>
  );
};

export default GamePoder;
