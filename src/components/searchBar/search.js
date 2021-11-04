import React, { useState } from "react";
import "./search.css" 
const Search=()=>{
    const [searchValue, setSearchValue]= useState("")
    const handleInputChanage=(event)=>{
        setSearchValue(event.target.value)
    }
    return(
        <div>
            <input type="text" value={searchValue} onChange={handleInputChanage}/>
            {searchValue}
        </div>
    )
}
export default Search;