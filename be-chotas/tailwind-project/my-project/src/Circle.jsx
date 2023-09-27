import './index.css'

function Circle({ number }) {

  return (
    <>
      <button className=' bg-slate-500 rounded-full w-8 h-8 hover:bg-amber-500 focus:bg-blue-800 hover:animate-spin'>{number}
      </button>
    </>
  )
}

export default Circle

/* Base:
  <button></button>
*/