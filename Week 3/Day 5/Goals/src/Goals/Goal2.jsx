import React from 'react'
import MouseTracker from './MouseTracker'

const Goal2 = () => {
    return (
        <div>
            <MouseTracker render={
                (position) => (
                    <h1>
                        X : {position.x}
                        Y : {position.y}
                    </h1>
                )
            } />
        </div>
    )
}

export default Goal2
