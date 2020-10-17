import React from 'react'
import renderer from 'react-test-renderer'
import Tabs from '@material-ui/core/Tabs'

import Header from '../index'
import * as stubs from './stubs'

describe('Header', () => {
  it('should match Header', () => {
    const wrapper = renderer.create(<Header {...stubs.headerProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('when categories are empty', () => {
    it('should not render the Header', () => {
      const wrapper = renderer.create(
        <Header {...stubs.headerPropsCategoriesEmpty} />
      )

      expect(wrapper.toJSON()).toBe(null)
    })
  })
})
