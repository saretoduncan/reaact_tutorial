import React, { useState } from "react";
import "./search.css" 
const Search=()=>{
    const [searchValue, setSearchValue]= useState("")
    const handleInputChanage=(event)=>{
        setSearchValue(event.target.value)
    }
    const shouldDisplayButton= searchValue>0;
    const handleClearClick=()=>{
            setSearchValue("")
    }
    return(
        <div>
            <input type="text" value={searchValue} onChange={handleInputChanage}/>
           {shouldDisplayButton && <button onClick={handleClearClick}> clear </button>}
        </div>
    )
}
export default Search;