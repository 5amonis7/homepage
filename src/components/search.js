import React from 'react'

const search = () => {
    return (
        <div>
            <form action="https://www.google.com/search" method="get" name="searchform" target="_blank">
                <input autoComplete="off" name="q" className="search" type="text" placeholder="Search..." />
            </form>
        </div>
    )
}

export default search
