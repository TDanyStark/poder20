export interface Question {
  id: string;
  question: string;
  correctAnswer: boolean;
  isActive: boolean;
  isAnswered: boolean;
  userSelected: boolean | null;
}

export const questionnaire: Question[] = [
  {
    id: "1",
    question:
      "Los anticonceptivos orales combinados contienen dos tipos de hormonas llamadas estrógenos y progestágenos",
    correctAnswer: true,
    isActive: false,
    isAnswered: false,
    userSelected: null,
  },
  {
    id: "2",
    question:
      "Todas las mujeres deben tomarse un descanso después de usar anticonceptivos orales combinados durante cierto tiempo",
    correctAnswer: false,
    isActive: false,
    isAnswered: false,
    userSelected: null,
  },
  {
    id: "3",
    question:
      "Los anticonceptivos orales combinados hacen que las mujeres aumenten de peso",
    correctAnswer: false,
    isActive: false,
    isAnswered: false,
    userSelected: null,
  },
  {
    id: "4",
    question:
      "El uso de un anticonceptivo oral combinado puede ayudar a mejorar los síntomas emocionales relacionados con el ciclo menstrual",
    correctAnswer: true,
    isActive: false,
    isAnswered: false,
    userSelected: null,
  },
  {
    id: "5",
    question:
      "Algunos anticonceptivos orales combinados se utilizan como tratamiento del acné",
    correctAnswer: true,
    isActive: false,
    isAnswered: false,
    userSelected: null,
  },
  {
    id: "6",
    question:
      "Las mujeres mayores de 35 años no pueden usar anticonceptivos orales combinados",
    correctAnswer: false,
    isActive: false,
    isAnswered: false,
    userSelected: null,
  },
];
