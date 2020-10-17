import React from 'react'
import CategoriesTabs from '../../navigation/CategoriesTabs'
import PropTypes from 'prop-types'

const Header = (props) => {
  if (!props.categories) return null

  return (
    <CategoriesTabs
      activeTabId={props.activeCategoryID}
      burgerMenuIconColor={props.burgerMenuIconColor}
      changeCategoryByID={props.changeCategoryByID}
      categories={[{ id: 0, name: 'Home' }, ...props.categories]}
      headerBackgroundColor={props.headerBackgroundColor}
    />
  )
}

Header.propTypes = {
  activeCategoryID: PropTypes.number,
  burgerMenuIconColor: PropTypes.string,
  categories: PropTypes.array,
  changeCategoryByID: PropTypes.func,
  headerBackgroundColor: PropTypes.string,
}

export default Header
