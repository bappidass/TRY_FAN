import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState('reac');
  const [btnname,setbtnname]=useState('ON');
  
  function start(PROPS){
    let value=5;
    if(PROPS=='ON'){
      setCount('react')
      setbtnname('OFF')
    }else{
      setCount('react')
      setbtnname('ON')
      slowerFan();
    }
  }
   


    function slowerFan(){
     let value=5;
      const timeout=  setInterval(() => {
       console.log(value=value-1);
       if(value==0){
        clearTimeout(timeout);
        setCount('reac')
       }else if(value==4){
        setCount('react10')
       }else if(value==3){
        setCount('react11')
       }else if(value==2){
        setCount('react12')
       }else if(value==2){
        setCount('react13')
       }
        }, 3000);
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
         <source  src="garm.mp3" type="audio/ogg"/>
        </audio>
       </div>
       <div className="bottons">
         <button onClick={()=>{btnname=='ON' ? start(btnname) : start(btnname) }}>{btnname}</button>
         <button onClick={()=>{btnname=='OFF' ?setCount('react1'):alert('First on fan')}}>1</button>
         <button onClick={()=>{btnname=='OFF' ?setCount('react2'):alert('First on fan')}} >2</button>
       </div>
      </div>
      <div className="madeby">
        <p>Made by bappi</p>
      </div>
    </>
  )
}

export default App
