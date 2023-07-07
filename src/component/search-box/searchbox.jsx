import React, { Component } from "react";
import "./searchbox.styles.css";

class SearchBox extends Component {


    render(){
        const {onsearchsearch} = this.props
        return (
            <dvi>
                 <input className="search-box" type='search-box' placeholder='Seach for monters' 
                onChange={onsearchsearch}/>
            </dvi>
        )
    }
}

export default SearchBox