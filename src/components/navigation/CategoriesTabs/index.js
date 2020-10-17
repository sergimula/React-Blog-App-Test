import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { get } from 'lodash/object'
import { debounce } from 'lodash/function'
import {
  AppBar,
  Grid,
  makeStyles,
  Tabs,
  Tab,
  Typography,
  useTheme,
} from '@material-ui/core'

import { Context } from '../../../store.js'
import CategoriesDrawer from '../CategoriesDrawer'
import styles from './styles'

const useStyles = makeStyles(styles)

const TABS_HIDE_AT = 400
const APPBAR_HIDE_AT = 800
const DEBOUNCE_MAX_WAIT = 1000
const DEBOUNCE_TIME = 250

const CategoriesTabs = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [areTabsHide, setAreTabsHide] = useState(false)
  const [isAppBarHide, setIsAppBarHide] = useState(false)

  if (!props.categories || props.categories.length <= 1) return null

  const checkScrollPosition = debounce(
    () => {
      setAreTabsHide(window.pageYOffset > TABS_HIDE_AT)
      setIsAppBarHide(window.pageYOffset > APPBAR_HIDE_AT)
    },
    DEBOUNCE_TIME,
    { leading: true, maxWait: DEBOUNCE_MAX_WAIT }
  )

  const onScroll = () => {
    checkScrollPosition()
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={classes.root}>
      {isAppBarHide ? (
        <CategoriesDrawer
          burgerMenuIconColor={props.burgerMenuIconColor}
          categories={props.categories}
          changeCategoryByID={props.changeCategoryByID}
        />
      ) : (
        <AppBar
          color='default'
          position='fixed'
          style={{
            backgroundColor: props.headerBackgroundColor,
          }}
        >
          <CategoriesDrawer
            burgerMenuIconColor={props.burgerMenuIconColor}
            categories={props.categories}
            changeCategoryByID={props.changeCategoryByID}
          />
          {!areTabsHide && (
            <Grid container justify='center'>
              <Tabs
                className={classes.tabs}
                indicatorColor='primary'
                onChange={(event, index) => {
                  props.changeCategoryByID(index)
                }}
                textColor='primary'
                value={props.activeTabId}
                variant='scrollable'
              >
                {props.categories.map((category) => (
                  <Tab key={category.id} label={category.name} />
                ))}
              </Tabs>
            </Grid>
          )}
        </AppBar>
      )}
    </div>
  )
}

CategoriesTabs.propTypes = {
  activeTabId: PropTypes.number,
  burgerMenuIconColor: PropTypes.string,
  categories: PropTypes.array,
  changeCategoryByID: PropTypes.func,
  headerBackgroundColor: PropTypes.string,
}

export default CategoriesTabs
