import React, { useState } from "react";
import "./search.css" 

const Search=(props)=>{
    
    const [searchValue, setSearchValue]= useState("")
   
    const handleInputChanage=(event)=>{
        setSearchValue(event.target.value)
    }
    const shouldDisplayButton= searchValue.length>0; 
    const handleClearClick=()=>{
            setSearchValue("")
    }
    const filteredProducts= props.products.filter((products)=> products.includes(searchValue))
    return(
        <div>
            <input type="text" value={searchValue} onChange={handleInputChanage}/>
           {shouldDisplayButton && <button onClick={handleClearClick}> clear </button>}
           <ul>
               {filteredProducts.map((product)=>{
                   return <li key={product}>{product}</li>
               })}
           </ul>
        </div>
    )
}
export default Search;