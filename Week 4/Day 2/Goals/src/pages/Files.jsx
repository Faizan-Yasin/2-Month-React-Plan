import React from 'react'
import { useParams } from 'react-router-dom'

const Files = () => {

    const params = useParams()

    return (
        <div>
            <h2>Files</h2>
            <h3>Path : {params["*"]}</h3>
        </div>
    )
}

export default Files
