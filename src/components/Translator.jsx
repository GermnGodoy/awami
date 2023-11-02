import { useState } from "react"
import { Translation } from "./Translation"


export function Translator ({setTranslator}) {


  const [content, setContent] = useState('Something easy to translate')

  return (
    <div className="flex flex-col bg-slate-950 h-screen w-screen">
    <div className=" bg-slate-950 w-screen h-full m-0 flex flex-row items-center justify-center gap-10">
      <div className="w-1/3 h-full flex justify-center flex-col">
        <h1 className=" text-white text-6xl self-start ml-5 font-bold">English</h1>
        <textarea cols="30" rows="10" name='content' value = {content} onChange={(val) => {setContent(val.target.value)}} className="bg-zinc-300 w-full h-2/3 rounded-3xl p-8 text-xl font-semibold max-h-[80vh]"/>
      </div>
      
      <div className="w-1/3 h-full flex justify-center flex-col">
        <h1 className=" text-white text-6xl self-end mr-5 font-bold">Awami</h1>
        <div className="bg-zinc-300 w-full h-2/3 rounded-3xl p-8 text-xl font-semibold resize-y overflow-hidden max-h-[80vh]">
          <Translation text={content}/>
        </div>

        
      </div>
      
    </div>
      <button className="bg-emerald-700 rounded-lg font-bold text-4xl text-zinc-200 m-5 p-2" onClick={val => setTranslator(!val)}>
        If you are Guillermo, you may click here
        </button>
    </div>
  )
}