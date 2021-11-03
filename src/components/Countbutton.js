import React ,{useState}from 'react';

 const CountButton= (props)=>{
     const [currentCount, setCurrentCount] = useState(0)//in order to update the dom
     const handleClick=()=>{
         setCurrentCount(currentCount+props.incrementBy)// update state function 
     }
     return <div>
         <button onClick={handleClick}>+1</button>
         <div>{currentCount}</div>
     </div>;
 }
 export default CountButton