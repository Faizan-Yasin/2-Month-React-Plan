import React from 'react'

const PostsSkeleton = ({ count = 8 }) => {
    return (
        <div>
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className="bg-gray-600 rounded-lg p-4 mt-2 animate-pulse"
                >
                    <div className="h-6 w-28 bg-gray-500 rounded mb-4"></div>
                    <div className="h-6 w-72 bg-gray-500 rounded"></div>
                </div>
            ))}
        </div>
    )
}

export default PostsSkeleton
