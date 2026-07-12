import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {

    const { id } = useParams()

    return (
        <div>
            <h2>Book Id : {id}</h2>
        </div>
    )
}

export default BookDetail
