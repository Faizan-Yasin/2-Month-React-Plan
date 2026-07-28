import React from "react"

const Skeleton = ({
    width = "100%",
    height = "1rem",
    count = 1,
    animation = "pulse",
    className = "",
}) => {
    const animationClass = {
        pulse: "animate-pulse",
        none: "",
    }

    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className={`bg-gray-700 rounded ${animationClass[animation]} ${className}`}
                    style={{ width, height }}
                />
            ))}
        </>
    )
}

export default Skeleton