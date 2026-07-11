import React, { useState } from 'react'

const Tabs = ({ children }) => {

  const [active, setActive] = useState(0)

  return (
    <div className='flex h-full'>
      {React.Children.map(children, (child) => (
        React.cloneElement(child, {
          active,
          setActive
        })
      ))}
    </div>
  )
}

Tabs.Sidebar = ({ children, active, setActive }) => (
  <div className='w-40 md:w-64 border-r p-5 space-y-3'>
    {React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        index,
        isActive: index === active,
        onSelect: () => (setActive(index))
      })
    ))}
  </div>
)

Tabs.Tab = ({ children, isActive, onSelect }) => (
  <button className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
    onClick={onSelect}>{children}</button>
)

Tabs.Content = ({ children, active }) => (
  <div className='flex-1 p-8'>
    {React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        index,
        active
      })
    ))}
  </div>
)

Tabs.Panel = ({ children, index, active }) => {
  if (index !== active) {
    return null
  }

  return <div>{children}</div>
}

export default Tabs
