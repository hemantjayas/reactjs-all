import React, { useState, useEffect } from 'react'

export const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
     
       const intervalID =  setInterval(() => {
            setTimer((prevTimer)=> prevTimer+1)
            
        }, 1000);   
    
      return () => {
        clearInterval(intervalID)
        console.log("setting the interval again ")
      }
    }, [])
    

  return (
    <div>Timer: {timer}</div>
  )
}
