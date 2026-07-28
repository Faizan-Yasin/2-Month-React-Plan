import React from "react"
import "./Skeleton.css"

const Skeleton = ({ width = "100%", height = "16px", rounded = false, count = 1, }) => {
    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className={`skeleton ${rounded ? "rounded-full" : "rounded"} mb-2`}
                    style={{ width, height }}
                />
            ))}
        </>
    )
}

export default Skeleton