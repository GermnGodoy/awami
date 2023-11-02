import { useState } from 'react'
import { Translator } from './components/Translator'
import { Quiz } from './components/Quiz'
import './App.css'

function App() {

  const [translator, setTranslator] = useState(true)

  const [finished, setFinished] = useState(false)

  return (
    translator 
      ? <Translator setTranslator={setTranslator}/>
      : finished ? <div className="w-screen h-screen bg-slate-900 justify-center items-center flex"><h1 className=" text-6xl font-bold text-white">LEMA DE AWAMI</h1></div>
                 : <Quiz setFinished = {setFinished}/>
  )
}

export default App
