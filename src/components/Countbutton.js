import React ,{useState}from 'react';

 const CountButton= (props)=>{
     const [currentCount, setCurrentCount] = useState(0)//in order to update the dom
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