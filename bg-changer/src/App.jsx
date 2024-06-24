import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor]= useState("white"); 

  return (
    <>
      <div className="main" style={{backgroundColor:color}}>
        <div className="colorTab">
          <button className='red' style={{backgroundColor:"red"}}
          onClick={()=>setcolor("red")}>Red</button>
          <button className='green' style={{backgroundColor:"green"}}
          onClick={()=>setcolor("green")}>Green</button>
          <button className='blue' style={{backgroundColor:"blue"}}
          onClick={()=>setcolor("blue")}>Blue</button>
          <button className='olive' style={{backgroundColor:"olive"}}
          onClick={()=>setcolor("olive")}>Olive</button>
          <button className='gray' style={{backgroundColor:"gray"}}
          onClick={()=>setcolor("gray")}>Gray</button>
          <button className='yellow' style={{backgroundColor:"yellow"}}
          onClick={()=>setcolor("yellow")}>Yellow</button>
          <button className='pink' style={{backgroundColor:"pink"}}
          onClick={()=>setcolor("pink")}>Pink</button>
          <button className='purple' style={{backgroundColor:"purple"}}
          onClick={()=>setcolor("purple")}>Purple</button>
          <button className='lavender' style={{backgroundColor:"lavender"}}
          onClick={()=>setcolor("lavender")}>Lavender</button>
          <button className='black' style={{backgroundColor:"black"}}
          onClick={()=>setcolor("black")}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App
