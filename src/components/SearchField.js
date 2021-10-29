import React from 'react'
import { useState } from 'react'

const SearchField = (props) => {
    
    const [searchState, setSearchState] = useState("");
    return (
        <section className="search-box-container">
            
            <form action="" className="grid grid-col-1">
                <label for="search"> Search from your todo list</label>
                <input placeholder="Enter keyword" value={searchState} className="form-control" type="text" id="filter" onChange={(event)=>{
                    setSearchState(event.target.value);
                    props.onSearch(event.target.value);
                }}/>
            </form>
    
        </section>
    )
}

export default SearchField
