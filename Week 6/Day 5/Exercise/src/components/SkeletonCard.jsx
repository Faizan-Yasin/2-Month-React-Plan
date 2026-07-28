import React from "react"
import Skeleton from "./Skeleton"

const SkeletonCard = ({ count = 8 }) => {
    return (
        Array.from({ length: count }, (_, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4 mb-4 shadow m-4">
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <Skeleton width="20%" height="18px" />

                        <Skeleton width="30%" height="14px" />

                        <Skeleton width="40%" height="14px" />
                    </div>
                </div>
            </div>
        ))
    )
}

export default SkeletonCard