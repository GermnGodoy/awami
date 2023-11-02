import { useState } from "react"
import { Question } from "./Question"

export function Quiz ({setFinished}) {

  const [FIRST_ANSWER, SET_FIRST_ANSWER] = useState(-1)
  const [SECOND_ANSWER, SET_SECOND_ANSWER] = useState(-1)

  const [next, setNext] = useState(false)

  const QUIZ = [
    {
      QUESTION: "Acepatas a Awami como tu legitimo Dios?",
      ANSWERS: ["Si", "No", "Puede", "SIIIII!!!!!!"],
      CORRECT_ANSWER: 3,
      ANSWER: FIRST_ANSWER,
      SET_ANSWER: SET_FIRST_ANSWER
    },
    {
      QUESTION: "Otra pregunta super guapa de topologia?",
      ANSWERS: ["QUE", "WTFFFF", "No me lo puto creo", "Que cojones"],
      CORRECT_ANSWER: 1,
      ANSWER: SECOND_ANSWER,
      SET_ANSWER: SET_SECOND_ANSWER
    }
  ]

  if (QUIZ[QUIZ.length - 1].ANSWER === QUIZ[QUIZ.length - 1].CORRECT_ANSWER && !next) {
    setNext(true)
  }

  if (!next) {
    return (
      (<div className="bg-slate-900 pt-10 w-screen h-screen flex flex-col items-center gap-0 font-bold text-xl text-emerald-800">{
        QUIZ.map((question, num) => {
          if (num === 0 || QUIZ[num - 1].ANSWER === QUIZ[num-1].CORRECT_ANSWER) {
            return (<Question 
            key = {`${question.QUESTION}${question.CORRECT_ANSWER}${num}`}
            setAnswer={question.SET_ANSWER} 
            question = {question.QUESTION} 
            res = {question.ANSWER} 
            answers={question.ANSWERS} 
            correct = {question.CORRECT_ANSWER}/>)
          }})
    }
    <button className="rounded-lg bg-red-950 mb-3 h-12 cursor-default font-bold text-xl text-red-800 w-4/6">
    TRADUCCION DEL TEOREMA
    </button>
    </div>)
    )
  } else {
    return (<div className="bg-slate-900 pt-10 w-screen h-screen flex flex-col items-center gap-0 font-bold text-xl text-emerald-800">{
      QUIZ.map((question, num) => {
        if (num === 0 || QUIZ[num - 1].ANSWER === QUIZ[num-1].CORRECT_ANSWER) {
          return (<Question 
          key = {`${question.QUESTION}${question.CORRECT_ANSWER}${num}`}
          setAnswer={question.SET_ANSWER} 
          question = {question.QUESTION} 
          res = {question.ANSWER} 
          answers={question.ANSWERS} 
          correct = {question.CORRECT_ANSWER}/>)
        }})
  }
  <button className="rounded-lg bg-emerald-900 mb-3 h-12 cursor-pointer font-bold text-xl text-emerald-500 w-4/6" onClick={() => setFinished(true)}>
  TRADUCCION DEL TEOREMA
  </button>
  </div>)
  }
}