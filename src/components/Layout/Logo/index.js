import _ from 'lodash'
import { get } from 'lodash/object'
import React, { useContext } from 'react'

import LogoImage from '../../../assets/logo.svg'
import { Context } from '../../../store.js'

const Logo = (props) => {
  const context = useContext(Context)

  return (
    <LogoImage
      style={{
        height: get(context, 'layout.header.logo.size.height'),
        width: get(context, 'layout.header.logo.size.width')
      }}
    />
  )
}

export default Logo
