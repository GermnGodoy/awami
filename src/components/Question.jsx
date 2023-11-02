import { useState } from "react"

export function Question ({setAnswer, question, res, answers, correct}) {
  console.log(answers)

  const [chosen, setChosen] = useState([])

  const handleClick = (pos) => {
    if (!chosen.includes(correct)) {
      setAnswer(pos)
      if (!chosen.includes(pos)) {
        setChosen(prev => [...prev, pos])
      }
    }
  } 

  return (
  
  <div className=" w-4/6 rounded-2xl h-80 p-4 m-8 mt-0 text-2xl font-bold text-white bg-slate-600 flex flex-col items-center ">
    <h1 className=" text-3xl m-2 mb-8">{question}</h1>
    {answers.map((answer, pos) => {
      if (chosen.includes(pos)) {
        if (pos === correct) {
          return(<button key={`${answer}${pos}`} onClick={() => handleClick(pos)} className="rounded-lg bg-emerald-900 w-full mb-3 h-12">
            {answer}
          </button>)} else {
          return(<button key={`${answer}${pos}`} onClick={() => handleClick(pos)} className="rounded-lg bg-red-900 w-full mb-3 h-12">
            {answer}
          </button>)
        }
      }
      return(<button key={`${answer}${pos}`} onClick={() => handleClick(pos)} className="rounded-lg bg-slate-950 w-full mb-3 h-12 hover:bg-slate-900">
        {answer}
      </button>)})}
  </div>
  )
}