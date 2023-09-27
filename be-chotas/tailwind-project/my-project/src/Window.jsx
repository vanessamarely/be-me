import './index.css'
import Circle from'./Circle.jsx'

function Window() {

  return (
    <>
      <div className="group/name grid bg-slate-800 w-80 h-80 rounded-xl p-7 hover:neon-amber">
        <h1 className='text-white font-bold text-2xl group-hover/name:text-amber-500'>How did we do?</h1>
        <p className='text-white'>Please let us know how did we did on your support request. All feedback is appreciated to hel up improve our offering!</p>
        <div className="flex justify-around place-items-center font-letter ">
            <Circle number={1} />
            <Circle number={2} />
            <Circle number={3} />
            <div className=' bg-slate-500 rounded-full w-8 h-8 hover:bg-amber-500 focus:bg-blue-700 hover:animate-ping text-center'>4</div>
            <div className=' bg-slate-500 rounded-full w-8 h-8 hover:bg-amber-500 hover:animate-pulse text-center'>5</div>
        </div>
        <button className='bg-amber-500 rounded-xl font-bold mt-2'>Send</button>
      </div>
    </>
  )
}

export default Window

/* 
Base:
<div>
    <h1>How did we do?</h1>
    <p>Please let us know how did we did on your support request. All feedback is appreciated to hel up improve our offering!</p>
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
    */