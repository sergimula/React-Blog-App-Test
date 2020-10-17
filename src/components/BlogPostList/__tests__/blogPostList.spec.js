import React from 'react'
import renderer from 'react-test-renderer'

import BlogPostList from '../index'
import BlogPostCardStyles from '../BlogPostCard/styles'
import * as stubs from './stubs'

describe('BlogPostList', () => {
  it('should match BlogPostList', () => {
    const wrapper = renderer.create(<BlogPostList posts={stubs.posts} />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('styles', () => {
  describe('BlogPostCard', () => {
    expect(BlogPostCardStyles).toMatchSnapshot()
  })
})
