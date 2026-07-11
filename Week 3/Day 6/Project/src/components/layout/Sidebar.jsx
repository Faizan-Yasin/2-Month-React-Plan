import React from 'react'
import Tabs from '../common/Tabs'
import Dashboard from '../dashboard/Dashboard'
import Settings from '../settings/Settings'
import Profile from '../profile/Profile'

const Sidebar = () => {
  return (
    <div>
      <aside>
        <Tabs>
          <Tabs.Sidebar>
            <Tabs.Tab>Dashboard</Tabs.Tab>
            <Tabs.Tab>Settings</Tabs.Tab>
            <Tabs.Tab>Profile</Tabs.Tab>
          </Tabs.Sidebar>


          <Tabs.Content>
            <Tabs.Panel><Dashboard /></Tabs.Panel>
            <Tabs.Panel><Settings /></Tabs.Panel>
            <Tabs.Panel><Profile /></Tabs.Panel>
          </Tabs.Content>
        </Tabs>
      </aside>
    </div>
  )
}

export default Sidebar
