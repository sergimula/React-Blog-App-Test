import React, { useState } from 'react'
import { Drawer, Grid, IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'

import Logo from 'src/components/Layout/Logo'
import CategoriesList from './CategoriesList'
import styles from './styles'

const useStyles = makeStyles(styles)

const CategoriesDrawer = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const classes = useStyles()

  const toggleDrawer = (isDrawerOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setIsDrawerOpen(isDrawerOpen)
  }

  return (
    <React.Fragment>
      <Grid
        alignContent='center'
        alignItems='center'
        container
        justify='center'
      >
        <Grid className={classes.drawerMenuIcon} item>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon style={{ color: props.burgerMenuIconColor }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Logo />
        </Grid>
      </Grid>
      <Drawer anchor={'left'} open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <CategoriesList
          categories={props.categories}
          changeCategoryByID={props.changeCategoryByID}
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
    </React.Fragment>
  )
}

CategoriesDrawer.propTypes = {
  burgerMenuIconColor: PropTypes.string,
  categories: PropTypes.array,
  changeCategoryByID: PropTypes.func,
}

export default CategoriesDrawer
