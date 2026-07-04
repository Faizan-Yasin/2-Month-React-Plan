import React from 'react'
import useToggle from '../hooks/useToggle'

const Modal = () => {
    const [isOpen, toggle, openModel, closeModel] = useToggle(false)
    return (
        <div>
            <button onClick={openModel}>Open Model</button>
            {isOpen ?
                <div>
                    <h2>Model is Open</h2>
                    <button onClick={closeModel}>Close Model</button>
                </div>
                :
                <div>
                    <h2>Model is Close</h2>
                    <button onClick={openModel}>Open Model</button>
                </div>
            }
            <button onClick={toggle}>Toggle Model</button>
        </div>
    )
}

export default Modal
