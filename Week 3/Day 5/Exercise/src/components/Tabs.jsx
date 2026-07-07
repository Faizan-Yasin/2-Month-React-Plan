// React.Children.map loops through every <Tabs.Tab> child.
//
// React.cloneElement creates a copy of each child and injects
// extra props (isActive and onSelect).
//
// Because of this, the consumer only writes:
//
// <Tabs.Tab>Profile</Tabs.Tab>
//
// and never manually passes:
//
// isActive={...}
// onSelect={...}
//
// React automatically adds those props before rendering.

import React from 'react'
import { useState } from 'react'

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    activeTab,
                    setActiveTab
                })
            })}
        </div>
    )
}

Tabs.List = function ({ children, activeTab, setActiveTab }) {
    return (
        <div>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    index,
                    isActive: activeTab === index,
                    onselect: () => setActiveTab(index)
                })
            })}
        </div>
    )
}

Tabs.Tab = function ({ children, isActive, onselect }) {
    return (
        <div>
            <button onClick={onselect}
                style={{
                    background:
                        isActive
                            ? "dodgerblue"
                            : "lightgray",
                    color:
                        isActive
                            ? "white"
                            : "black",
                    margin: "5px",
                }}>{children}</button>
        </div>
    )
}

Tabs.Content = function ({ children, activeTab }) {
    return (
        <div>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    index,
                    activeTab
                })
            })}
        </div>
    )
}

Tabs.Panel = function ({ children, index, activeTab }) {
    if (index !== activeTab) {
        return null
    }
    return <div>{children}</div>
}

export default Tabs
