import React from 'react'
import Card from './Card'

const BlogPostCard = ({ title, subtitle, excerpt }) => {
    return (
        <div>
            <Card title={title} subtitle={subtitle} footer={<a href='#'>Read More</a>}>
            <p>{excerpt}</p>
            </Card>
        </div>
    )
}

export default BlogPostCard
