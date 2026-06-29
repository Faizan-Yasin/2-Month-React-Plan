import React from 'react'
import { List } from 'react-window'

const VirtualList = () => {
    const users = Array.from({ length: 500 }, (_, i) => `User ${i + 1}`)
    function Row({ index, style, data }) {
        return (
            <div style={{ ...style }}>
                {data[index]}
            </div>
        )
    }
    return (
        // <div>
        //     {users.map((value, index) => {
        //         return (
        //             <div key={index}>
        //                 <h1>{value}</h1>
        //             </div>
        //         )
        //     })}
        // </div>

        <div>
            <List style={{ width: 400, height: 400 }} rowComponent={Row} rowCount={users.length} rowHeight={50} rowProps={{ data: users }} />
        </div>
    )
}

export default VirtualList
