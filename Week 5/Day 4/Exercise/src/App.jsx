import React from 'react'
import ReduxCard from './components/ReduxCard'
import ZustandCard from './components/ZustandCard'

/*
Redux Build Size : 232.85 KB (gzip: 74.49 KB)

Zustand Build Size : 231.47 KB (gzip: 74.07 KB)

Observation:

Zustand produced a slightly smaller bundle than Redux Toolkit.
The difference is only about 1.38 KB because this is a small project.
In larger applications, the difference may become more noticeable.
*/

const App = () => {
  return (
    <div>
      {/* <ReduxCard /> */}
      <ZustandCard />
    </div>
  )
}

export default App
