import './App.css'

function App() {
  return (
    <>
      <div
        className="
        flex
        rounded-md
        bg-red-400
        w-1/2
        h-[22px]
        p-0
        m-auto
        shadow-2xl
        shadow-slate-300
        justify-center
        items-center
        md:p-40
        md:w-64  
        md:bg-sky-400
        lg:bg-white-500
        dark:bg-slate-800"
      >
        <h1>Hola mundo</h1>
      </div>
      <div className="portrait:hidden">me veo en portraid</div>
    </>
  )
}

export default App
