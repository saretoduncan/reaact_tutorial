import React, { useState } from "react";
import "./search.css" 
const products = [
"tooth paste",
"mouth wash",
"dental floss",
"mouth guard"

]
const Search=()=>{
    
    const [searchValue, setSearchValue]= useState("")
    const handleInputChanage=(event)=>{
        setSearchValue(event.target.value)
    }
    const shouldDisplayButton= searchValue>0; 
    const handleClearClick=()=>{
            setSearchValue("")
    }
    const filteredProducts= products.filter((products)=> products.includes(searchValue))
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