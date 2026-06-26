import React from 'react'
import Card from './components/Card'
import BlogPostCard from './components/BlogPostCard'
import Notification from './components/Notification'
import CardHeader from './components/CardHeader'

const App = () => {
  return (
    <>
      <div>
        <BlogPostCard title="React Learning" subtitle="Week 2" excerpt="React is a JavaScript library for building user interfaces." />
      </div>
      <div>
        <Notification type="info" message="Login Successfully" />
        <Notification type="warning" message="Password Expire" />
        <Notification type="error" message="Something went wrong" />
      </div>
      <div>
        <Card title="Learning React" icon="📘" action={<button>Edit</button>} footer={<button>Read More</button>}>
          <p>Learning React Components</p>
        </Card>
      </div>
      <div>
        <CardHeader title="React Book" action={<button>Edit</button>} icon="📕" />
      </div>
    </>
  )
}

export default App
