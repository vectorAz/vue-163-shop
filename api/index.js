import axios from './axios'
const prefix = process.env.NODE_ENV === 'development' ? '/apis' : 'http://m.you.163.com';

export const GetHomedata=()=>axios('/home')

export const GetCategoryList=()=>axios('/categoryList')


export const GetCationData=()=>axios(prefix+'/topic/v1/find/getTabs.json')

export const GetRecommendedData=()=>axios(prefix+'/topic/v1/find/recManual.json')

console.log('-----');
console.log(GetRecommendedData());
console.log('-----');
