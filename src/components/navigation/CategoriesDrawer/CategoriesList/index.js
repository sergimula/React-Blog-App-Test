import React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'

import styles from './styles'

const useStyles = makeStyles(styles)

const CategoriesList = (props) => {
  const classes = useStyles()

  return (
    <div
      className={classes.list}
      role='presentation'
    >
      <List>
        {props.categories.map((category) => (
          <React.Fragment>
            <ListItem
              button
              key={category.id}
              onClick={() => props.changeCategoryByID(category.id)}
            >
              <ListItemText primary={category.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array,
  changeCategoryByID: PropTypes.func,
  toggleDrawer: PropTypes.func
}

export default CategoriesList
