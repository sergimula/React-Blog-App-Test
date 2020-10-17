import React, { useContext, useEffect } from 'react'
import _ from 'lodash'
import { get } from 'lodash/object'
import { isEmpty } from 'lodash/lang'
import Link from 'next/link'
import { useTheme } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'

import mockData from '../mocks'
import { CATEGORY_CHANGED, DATA_LOADED } from '../constants/actionTypes.js'
import { Context, DispatchContext } from '../store.js'
import Layout from '../components/Layout'
import BlogPostList from '../components/BlogPostList'

const Index = (props) => {
  const theme = useTheme()
  const context = useContext(Context)
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    dispatch({ type: DATA_LOADED, data: props })
  }, [])

  return (
    <Layout>
      <SwipeableViews
        animateHeight
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={get(context, 'activeCategoryID', 0)}
        onSwitching={(index, type) => {
          if (type === 'end') {
            dispatch({
              type: CATEGORY_CHANGED,
              activeCategoryID: index,
            })
          }
        }}
        enableMouseEvents
        hysteresis='0'
      >
        <BlogPostList index={0} posts={props.posts} />
        {props.categories.map((category) => (
          <BlogPostList
            index={category.id}
            key={category.id}
            posts={props.posts.filter(
              (post) => post.category_id === category.id
            )}
          />
        ))}
      </SwipeableViews>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await fetch(
      'https://my-json-server.typicode.com/sergimula/example-blog-api-db/db'
    )
    const data = await res.json()

    //Fallback in case the api stop working
    if (isEmpty(data)) {
      return {
        categories: mockData.categories,
        layout: mockData.layout,
        posts: mockData.posts,
      }
    }

    return {
      categories: data.categories,
      layout: data.layout,
      posts: data.posts,
    }
  } catch (error) {
    console.log(error)
  }
}

export default Index
