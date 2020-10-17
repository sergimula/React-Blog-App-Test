import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import BlogPostCard from './BlogPostCard'

const BlogPostList = (props) => (
  <Grid alignContent='center' container direction='column' justify='center'>
    {props.posts.map((post) => (
      <BlogPostCard
        description={post.description}
        imageUrl={post.image}
        key={post.id}
        title={post.title}
      />
    ))}
  </Grid>
)

BlogPostList.propTypes = {
  posts: PropTypes.array,
}

export default BlogPostList
