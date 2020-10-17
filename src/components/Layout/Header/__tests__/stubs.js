import mockData from '../../../../mocks'

export const categories = mockData.categories

export const headerProps = {
  activeCategoryID: 0,
  burgerMenuIconColor: '',
  categories,
  changeCategoryByID: jest.fn(),
  headerBackgroundColor: ''
}

export const headerPropsCategoriesEmpty = {
  ...headerProps,
  categories: []
}
