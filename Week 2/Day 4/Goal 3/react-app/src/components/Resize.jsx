import React from 'react'
import { useEffect } from 'react'

const Resize = () => {
    useEffect(()=>{
        function handleResize(){
            console.log(window.innerWidth)
        }
        window.addEventListener("resize",handleResize)
        return ()=>{
            window.removeEventListener("resize",handleResize)
            console.log("Event Listener Removed");
        }
    },[])
  return (
    <div>
      <h1>Resize the Window</h1>
    </div>
  )
}

export default Resize
