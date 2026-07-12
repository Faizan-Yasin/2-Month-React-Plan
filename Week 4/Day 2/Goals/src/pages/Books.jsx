import React from 'react'
import { NavLink } from 'react-router-dom'

const Books = () => {

    const books = [
        { id: 1, title: "React js" },
        { id: 2, title: "Next js" },
        { id: 3, title: "Node.js" },
        { id: 4, title: "JavaScript" },
    ]

    return (
        <div>
            {books.map(book => (
                <div key={book.id}>
                    <NavLink to={`/books/${book.id}`} className={({ isActive }) => (isActive ? "link-active" : "link-not-active")} >
                        {book.title}
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default Books
