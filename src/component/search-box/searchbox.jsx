import React from "react";
import "./searchbox.styles.css";

const SearchBox=({onsearchsearch})=> {
    return (
        <dvi>
        <input className="search-box" type='search-box' placeholder='Seach for monters' 
         onChange={onsearchsearch}/>
        </dvi>
    )
    
}

export default SearchBox