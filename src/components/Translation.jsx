import Letters from '../logic/Letters'

export function Translation ({ text }) {

  return (
    <div className=" grid grid-flow-row gap-2 grid-cols-18">
      {[...text].map(
        (letter, num) => {
          Letters[letter].map(src => <img className="" src={`${src}`} width={20} height={20} key={`${src}${num}`}/>)
        }
        
      )}
    </div>
  )

}