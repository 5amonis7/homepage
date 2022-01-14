import React, { useState } from 'react'

const Search = () => {
    const [ search, setSearch ] = useState("")
    
    function clear(){
        setSearch("")
    }

    return (
        <div>
            <form action="https://www.google.com/search" method="get" name="searchform" target="_blank">
                <input onChange={event => setSearch(event.target.value)} autoComplete="off" name="q" className="search" type="text" placeholder="Search..." value={search} onClick={clear}  />
            </form>
        </div>
    )
}

export default Search
