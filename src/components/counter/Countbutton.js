import React ,{useState, useEffect}from 'react';

 const CountButton= (props)=>{
     const [currentCount, setCurrentCount] = useState(0)//in order to update the dom
     useEffect(()=>{console.log("only called when components mounts");},[])//its  function that loads after the page loads
     useEffect(()=>{console.log("called when the component mounts or the current count is updated");},[currentCount])//its  function that loads after the page loads
     const handleClick=()=>{
         setCurrentCount(currentCount+props.incrementBy)// update state function 
     }
     const buttonStyle={
         backgroundColor: props.buttonBackgroundColor,
         borderRadius:"10px",
        }
        return <div>
            <button style={buttonStyle} onClick={handleClick}>{props.incrementBy}</button>
         <div>{currentCount}</div>
     </div>;
 }
 export default CountButton