import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState('reac');
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
         <button onClick={()=>{setCount('reac')}} >OFF</button>
         <button onClick={()=>{setCount('react')}}>ON</button>
         <button onClick={()=>{setCount('react1')}}>1</button>
         <button onClick={()=>{setCount('react2')}} >2</button>
       </div>
        
       
      </div>
      <div className="madeby">
        <p>Made by bappi</p>
      </div>
    </>
  )
}

export default App
