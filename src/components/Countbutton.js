import React from 'react';

 const CountButton= ()=>{
     const currentCount = 0
     const handleClick=()=>{
         alert("clicked")
     }
     return <div>
         <button onClick={handleClick}>+1</button>
         <div>{currentCount}</div>
     </div>;
 }
 export default CountButton