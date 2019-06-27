import Mock from 'mockjs'
import homedata from './data/homeData.json'
import category from './data/category.json'
Mock.mock('/home', {
  code: 0,
  data: homedata
})
Mock.mock('/categoryList', {
  code: 0,
  data: category
})

