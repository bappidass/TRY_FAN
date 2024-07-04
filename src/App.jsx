import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState('reac');
  const [btnname,setbtnname]=useState('OFF');
  
  function start(PROPS){
   
    if(PROPS=='ON'){
      setCount('reac')
      setbtnname('OFF')
    }else{
      setCount('react')
      setbtnname('ON')
    }
   
  }

  return (
    <>
      <div>
       <div>
        <a href="" target="_blank">
          <img src='fan.png' className={count} alt="React logo" />
        </a>
       </div>
       <div>
        <audio controls autoPlay loop >
         <source  src="garam.mp3" type="audio/ogg"/>
        </audio>
       </div>
       <div className="bottons">
         <button onClick={()=>{btnname=='ON' ? start(btnname) : start(btnname) }}>{btnname}</button>
         <button onClick={()=>{btnname=='ON' ?setCount('react1'):alert('First on fan')}}>1</button>
         <button onClick={()=>{btnname=='ON' ?setCount('react2'):alert('First on fan')}} >2</button>
       </div>
      </div>
      <div className="madeby">
        <p>Made by bappi</p>
      </div>
    </>
  )
}

export default App
