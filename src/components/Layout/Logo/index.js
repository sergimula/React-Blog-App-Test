import React, { useContext } from 'react'
import _ from 'lodash'
import { get } from 'lodash/object'

import { Context } from 'src/store.js'

const Logo = (props) => {
  const context = useContext(Context)

  return (
    <img
      src='/assets/logo.svg'
      width={get(context, 'layout.header.logo.size.width')}
      height={get(context, 'layout.header.logo.size.height')}
    />
  )
}

export default Logo
