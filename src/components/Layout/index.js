import React, { useContext, useReducer } from 'react'
import _ from 'lodash'
import { get } from 'lodash/object'
import { Container, makeStyles } from '@material-ui/core'

import { Context, DispatchContext } from '../../store.js'
import { CATEGORY_CHANGED } from '../../constants/actionTypes'
import Header from './Header'
import styles from './styles'

const useStyles = makeStyles(styles)

const Layout = (props) => {
  const context = useContext(Context)
  const dispatch = useContext(DispatchContext)
  const classes = useStyles()

  return (
    <>
      <Header
        activeCategoryID={get(context, 'activeCategoryID', 0)}
        categories={get(context, 'categories')}
        changeCategoryByID={(categoryID) => {
          dispatch({
            type: CATEGORY_CHANGED,
            activeCategoryID: categoryID,
          })
        }}
        headerBackgroundColor={get(context, 'layout.header.background.colour')}
        burgerMenuIconColor={get(context, 'layout.header.burger_menu.color')}
      />
      <Container className={classes.root}>{props.children}</Container>
    </>
  )
}

export default Layout
