import React, { useState } from 'react'

const Input = ({ search, setSearch }) => {

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
        </div>
    )
}

export default Input
