import React, { use } from 'react'
import { useEffect, useState } from 'react'

const TextArea = () => {
    const [notes, setNotes] = useState("")
    const [status, setStatus] = useState("Saved")

    useEffect(() => {
        if (notes === "") {
            return
        }

        setStatus("Saving...")

        const id = setTimeout(() => {
            localStorage.setItem("notes", notes)
            setStatus("Saved")
        }, 1000);

        return () => {
            clearTimeout(id)
        }
    }, [notes])
    return (
        <div>
            <textarea value={notes} placeholder='Write Notes' onChange={(e) => setNotes(e.target.value)}></textarea>
            <h2>{status}</h2>
        </div>
    )
}

export default TextArea
