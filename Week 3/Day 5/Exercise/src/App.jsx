
/*
Render Props and Hooks both share reusable logic.

I prefer Hooks because:

1. Less code.
2. Easier to read.
3. No nested wrapper components.
4. Simpler to reuse logic in any component.

Render Props are still useful when a library wants
the consumer to have complete control over the UI.
*/

import React from 'react'
import Tabs from './components/Tabs'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import UserDirectoryContainer from './components/UserDirectoryContainer'

const App = () => {

  const position = useMousePosition()
  // const tabs = [
  //   {
  //     label: "Home",
  //     content: <h1>Home Page</h1>
  //   },
  //   {
  //     label: "About",
  //     content: <h1>About Page</h1>
  //   },
  //   {
  //     label: "Contact",
  //     content: <h1>Contact Page</h1>
  //   },
  // ]
  // return (
  //   <div>
  //     <Tabs tabs={tabs} />
  //   </div>
  // )

  return (
    /*
    Compound Components are flexible because each Tab.Panel
    can render completely different content.

    Profile -> React Component (UserDirectoryContainer)
    Settings -> Form
    About -> Plain text

    The Tabs component doesn't need to know what each panel
    contains. It only controls which panel is active.
    */

    <div>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Profile</Tabs.Tab>
          <Tabs.Tab>Setting</Tabs.Tab>
          <Tabs.Tab>Security</Tabs.Tab>
        </Tabs.List>
        <Tabs.Content>
          <Tabs.Panel>
            <UserDirectoryContainer />
          </Tabs.Panel>
          <Tabs.Panel>
            <form>
              <div>
                <label>Name : </label>
                <br />
                <input type="text" placeholder='Enter Your Name...' />
              </div>
              <br />
              <div>
                <label>Email : </label>
                <br />
                <input type="email" placeholder='Enter Your Email...' />
                <button>Submit</button>
              </div>
            </form>
          </Tabs.Panel>
          <Tabs.Panel>
            <h2>About</h2>

            <p>
              This application demonstrates the
              Compound Component Pattern using
              React.Children.map() and
              React.cloneElement().
            </p>
          </Tabs.Panel>
        </Tabs.Content>
      </Tabs>

      {/* <MouseTracker render={(position) => {
        return (
          <h1>
            X : {position.x}
            <br />
            Y: {position.y}
          </h1>
        )
      }} /> */}

      {/* <div>

        <h1>

          X : {position.x}

        </h1>

        <h1>

          Y : {position.y}

        </h1>

      </div> */}

    </div>
  )
}

export default App
